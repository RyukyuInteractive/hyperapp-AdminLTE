import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'
import 'admin-lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.css'
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
import 'bootstrap-daterangepicker/daterangepicker.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'ionicons/dist/css/ionicons.css'
import 'jvectormap/jquery-jvectormap.css'
import 'morris.js/morris.css'

import { app, h } from 'hyperapp'
import { Container, decorate, inject, injectable, named, tagged } from 'inversify'
import 'reflect-metadata'

import { default as jquery } from 'jquery'
(window as any).jQuery = (window as any).$ = jquery

import 'bootstrap'

import 'admin-lte'
