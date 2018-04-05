import { Container, decorate, inject, injectable, interfaces, named, tagged } from 'inversify'

import 'reflect-metadata'

import { app, h } from 'hyperapp'

// @ts-ignore
import { Link, location, Route, Switch } from '@hyperapp/router'

const kernel = new Container()

class InjectableFunction<
  T extends
    | (() => any)
    | ((arg1: any) => any)
    | ((arg1: any, arg2: any) => any)
    | ((arg1: any, arg2: any, arg3: any) => any)
    | ((arg1: any, arg2: any, arg3: any, arg4: any) => any)
    | ((arg1: any, arg2: any, arg3: any, arg4: any, arg5: any) => any)
    | ((...args: any[]) => any)
> extends Function {
  constructor (f: T) {
    super()
    return Object.setPrototypeOf(f, new.target.prototype)
  }
}

InjectableFunction.prototype = new Proxy(InjectableFunction.prototype, {
  get (target, property, receiver) {
    return 'constructor' === property ? Object : target[property]
  }
})

type bindingInWhenOnCallback<T> = (binding: interfaces.BindingInWhenOnSyntax<T>) => void

function createBindDecorator (binds, bindingInWhenOn, force: boolean) {
  return function binding<TFunction extends interfaces.Newable<T> | interfaces.Abstract<T>, T> (
    target: TFunction
  ): TFunction {
    bindingInWhenOn(kernel.bind<T>(target).toSelf())

    if (target.name && (force || !kernel.isBound(target.name))) {
      bindingInWhenOn(kernel.bind<T>(target.name).to(target as any))
    }

    for (const bindFrom of binds) {
      if (bindFrom && (force || !kernel.isBound(bindFrom))) {
        bindingInWhenOn(kernel.bind<T>(bindFrom).to(target as any))
      }
    }

    return target
  }
}

const noopBindingSyntax = <T>(binding: interfaces.BindingInWhenOnSyntax<T>) => binding

function bind<T> (...binds: any[]) {
  return function bindSyntax (
    bindingInWhenOn: bindingInWhenOnCallback<T> = noopBindingSyntax
  ): ClassDecorator {
    return createBindDecorator(binds, bindingInWhenOn, true)
  }
}

function bindWhenNotBound<T> (...binds: any[]) {
  return function bindingSyntaxWhenNotBound (
    bindingInWhenOn: bindingInWhenOnCallback<T> = noopBindingSyntax
  ): ClassDecorator {
    return createBindDecorator(binds, bindingInWhenOn, false)
  }
}

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
