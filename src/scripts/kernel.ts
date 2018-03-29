import {
  Container,
  decorate,
  inject,
  injectable,
  interfaces,
  named,
  tagged
} from 'inversify'

import 'reflect-metadata'

import { app, h } from 'hyperapp'

//@ts-ignore
import { Link, location, Route, Switch } from '@hyperapp/router'

class InjectableFunction extends Function {
  constructor(f: Function) {
    super();
    return Object.setPrototypeOf(f, new.target.prototype);
  }
}

InjectableFunction.prototype = new Proxy(InjectableFunction.prototype, {
  get(target, property, receiver) {
    return 'constructor' === property ? Object : target[property];
  }
});

interface bindingInWhenOnCallback<T> {
  (binding: interfaces.BindingInWhenOnSyntax<T>): void
}

function createBindDecorator(binds, bindingInWhenOn, force: boolean) {
  return function bind
    <TFunction extends Function, T>(target: TFunction): TFunction {

    bindingInWhenOn(kernel.bind<T>(target).toSelf())

    if (target.name && (force || !kernel.isBound(target.name))) {
      bindingInWhenOn(kernel.bind<T>(target.name).to(target as any))
    }

    for (const bind of binds) {
      if (bind && (force || !kernel.isBound(bind))) {
        bindingInWhenOn(kernel.bind<T>(bind).to(target as any))
      }
    }

    return target;
  }
}

const noopBindingSyntax = <T>(binding: interfaces.BindingInWhenOnSyntax<T>) => { };

function bind<T>(...binds: any[]) {
  return function bindSyntax<T>(
    bindingInWhenOn: (bindingInWhenOnCallback<T>) = noopBindingSyntax
  ): ClassDecorator {
    return createBindDecorator(binds, bindingInWhenOn, true);
  }
}

function bindWhenNotBound<T>(...binds: any[]) {
  return function bindSyntaxWhenNotBound<T>(
    bindingInWhenOn: (bindingInWhenOnCallback<T>) = noopBindingSyntax
  ): ClassDecorator {
    return createBindDecorator(binds, bindingInWhenOn, false);
  }
}

const kernel = new Container()
kernel.bind(Container).toConstantValue(kernel)
kernel.bind('kernel').toConstantValue(kernel)

kernel.bind(Link).toConstantValue(Link)
kernel.bind('Link').toConstantValue(Link)

kernel.bind(Route).toConstantValue(Route)
kernel.bind('Route').toConstantValue(Route)

kernel.bind(Switch).toConstantValue(Switch)
kernel.bind('RouteSwitch').toConstantValue(Switch)

kernel.bind(location).toConstantValue(location)
kernel.bind('location').toConstantValue(location)

kernel.bind(app).toConstantValue(app)
kernel.bind('hyperapp').toConstantValue(app)

export {
  InjectableFunction,
  bind,
  bindWhenNotBound,
  decorate,
  h,
  inject,
  injectable,
  kernel,
  named,
  tagged
}
