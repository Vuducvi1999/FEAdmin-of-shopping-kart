(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-orders-orders-module"],{

/***/ "1rpD":
/*!************************************************************!*\
  !*** ./src/app/lib/data/services/orders/orders.service.ts ***!
  \************************************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/http/http-client */ "zzwl");



class OrdersService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/order';
    }
    get(request) {
        return this.httpClient.getObservable(this.url, request).toPromise();
    }
    getDetails(request) {
        return this.httpClient.getObservable(this.url + '-detail', request).toPromise();
    }
    getByStatus(request, status) {
        return this.httpClient.getObservable(this.url + '/by-status?status=' + status, request).toPromise();
    }
    create(model) {
        return this.httpClient.postObservable(this.url, model).toPromise();
    }
    update(model) {
        return this.httpClient.putObservable(this.url, model).toPromise();
    }
    delete(model) {
        const url = `${this.url}?id=${model === null || model === void 0 ? void 0 : model.id}`;
        return this.httpClient.deleteObservable(url).toPromise();
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"] }]; }, null); })();


/***/ }),

/***/ "AQUe":
/*!***********************************************************************!*\
  !*** ./src/app/components/orders/list-order/list-orders.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOrdersComponent", function() { return ListOrdersComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/models */ "MFsa");
/* harmony import */ var src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/services/orders/orders.service */ "1rpD");
/* harmony import */ var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */ "nL8c");
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ "whnt");
/* harmony import */ var _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../update-order/update-order.component */ "xwQH");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ "e9Dt");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/paging-server-view/paging-server-view.component */ "sirP");














function ListOrdersComponent_app_paging_server_view_26_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-paging-server-view", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function ListOrdersComponent_app_paging_server_view_26_Template_app_paging_server_view_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r4.data);
} }
class ListOrdersComponent {
    constructor(modalService, ordersService, datePipe, messageService) {
        this.modalService = modalService;
        this.ordersService = ordersService;
        this.datePipe = datePipe;
        this.messageService = messageService;
        this.filter = '';
        this.params = {};
        this.isGetOrders = false;
        this.settings = {
            mode: 'external',
            actions: {
                position: 'right',
                add: false,
                delete: false,
            },
            columns: {
                code: {
                    title: 'Code',
                },
                createByDate: {
                    filter: false,
                    title: 'Created Date',
                    valuePrepareFunction: (date) => {
                        return this.datePipe.transform(new Date(date), 'dd/MM/yyyy');
                    },
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_5__["CustomViewCellComponent"],
                },
                fullName: {
                    title: 'Full Name',
                },
                address: {
                    title: 'Address',
                },
                phone: {
                    title: 'Phone',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_5__["CustomViewCellComponent"],
                },
                email: {
                    title: 'Email',
                },
                status: {
                    filter: false,
                    title: 'Status',
                },
                note: {
                    filter: false,
                    title: 'Note',
                },
                hasCoupon: {
                    filter: false,
                    title: 'Coupon Applied',
                    valuePrepareFunction: (cell, row) => {
                        return cell ? row.couponName : '';
                    },
                },
                totalAmount: {
                    filter: false,
                    title: 'Total Amount',
                    value: 'totalAmount',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_4__["CustomViewCellNumberComponent"],
                },
            },
        };
        this.params.pageIndex = 0;
        // this.getOrders();
    }
    ngOnInit() {
        this.actionFilter('New');
    }
    getOrders() {
        this.isGetOrders = false;
        this.ordersService
            .get({ params: this.params })
            .then((res) => {
            if (!res.hasError) {
                this.data = res.data;
                this.orders = res.data.results;
                this.orders.forEach((order) => {
                    order.hasCoupon = false;
                    if (order.couponCode) {
                        order.hasCoupon = true;
                    }
                });
            }
        })
            .catch((er) => {
            if (er.error.hasError) {
                console.log(er.error.message);
            }
        });
    }
    openUpdate(event) {
        var modalRef = this.modalService.open(_update_order_update_order_component__WEBPACK_IMPORTED_MODULE_6__["UpdateOrderComponent"], {
            size: 'lg',
        });
        modalRef.componentInstance.item = event === null || event === void 0 ? void 0 : event.data;
        modalRef.result.then(() => this.getOrders(), (dismiss) => { });
    }
    statusFilter(button) {
        this.isGetOrders = true;
        let status = button.innerText.toUpperCase() !== 'All'.toUpperCase()
            ? button.innerText
            : '';
        button.classList.add('active');
        if (this.filter == status || status == '') {
            this.filter = '';
            this.params.pageIndex = 0;
            return this.getOrders();
        }
        this.filter = status;
        return this.actionFilter(status);
    }
    removeAllAction(...left) {
        left.forEach((i) => i.classList.remove('active'));
    }
    actionFilter(status) {
        this.ordersService
            .getByStatus(null, status)
            .then((response) => {
            this.orders = response.data ? response.data : [];
            this.orders.forEach((order) => {
                order.hasCoupon = false;
                if (order.couponCode) {
                    order.hasCoupon = true;
                }
            });
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR);
            // if (er.error.hasError) {
            //   console.log(er.error.message)
            // }
        });
    }
    onPage(event) {
        this.params.pageIndex = event;
        this.getOrders();
    }
}
ListOrdersComponent.ɵfac = function ListOrdersComponent_Factory(t) { return new (t || ListOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"])); };
ListOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListOrdersComponent, selectors: [["app-list-orders"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])], decls: 27, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "btn-xs", "mr-2", 3, "click"], ["allButton", ""], ["type", "button", 1, "btn", "btn-primary", "btn-xs", "mr-2", "active", 3, "click"], ["newButton", ""], ["approvedButton", ""], ["rejectedButton", ""], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange", "edit"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]], template: function ListOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Approved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListOrdersComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); ctx.removeAllAction(_r0, _r1, _r2, _r3); return ctx.statusFilter(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Rejected ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ng2-smart-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sourceChange", function ListOrdersComponent_Template_ng2_smart_table_sourceChange_25_listener($event) { return ctx.orders = $event; })("edit", function ListOrdersComponent_Template_ng2_smart_table_edit_25_listener($event) { return ctx.openUpdate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ListOrdersComponent_app_paging_server_view_26_Template, 1, 1, "app-paging-server-view", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isGetOrders && (ctx.data == null ? null : ctx.data.totalPage) > 1);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_10__["PagingServerViewComponent"]], styles: ["button.btn.btn-primary.active[_ngcontent-%COMP%] {\n  background-color: #f93e44 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6Imxpc3Qtb3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTNlNDQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list-orders',
                templateUrl: './list-orders.component.html',
                styleUrls: ['./list-orders.component.scss'],
                providers: [src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }, { type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "EDFb":
/*!*******************************************************************!*\
  !*** ./src/app/lib/data/services/orders/order-details.service.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsService", function() { return OrderDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/http/http-client */ "zzwl");



class OrderDetailsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/order-detail';
    }
    get(request) {
        return this.httpClient.getObservable(this.url, request).toPromise();
    }
    create(model) {
        return this.httpClient.postObservable(this.url, model).toPromise();
    }
    update(model) {
        return this.httpClient.putObservable(this.url, model).toPromise();
    }
    delete(id) {
        const url = `${this.url}?id=${id}`;
        return this.httpClient.deleteObservable(url).toPromise();
    }
    getByOrder(id, request) {
        const url = `${this.url}/order?id=${id}`;
        return this.httpClient.getObservable(url, request).toPromise();
    }
}
OrderDetailsService.ɵfac = function OrderDetailsService_Factory(t) { return new (t || OrderDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"])); };
OrderDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderDetailsService, factory: OrderDetailsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"] }]; }, null); })();


/***/ }),

/***/ "S8gY":
/*!************************************************************!*\
  !*** ./src/app/components/orders/orders-routing.module.ts ***!
  \************************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-order/list-orders.component */ "AQUe");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-orders',
                component: _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_2__["ListOrdersComponent"],
                data: {
                    title: "Order List",
                    breadcrumb: "Order List"
                }
            }
        ]
    }
];
class OrdersRoutingModule {
}
OrdersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrdersRoutingModule });
OrdersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrdersRoutingModule_Factory(t) { return new (t || OrdersRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "eLhG":
/*!*******************************************************!*\
  !*** ./src/app/lib/data/models/orders/order.model.ts ***!
  \*******************************************************/
/*! exports provided: OrderModel, OrderDetailModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModel", function() { return OrderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailModel", function() { return OrderDetailModel; });
class OrderModel {
    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.phone = '';
        this.email = '';
        this.note = '';
        this.status = 'New';
        this.totalAmount = 0;
        this.totalItem = 0;
        this.orderDetails = [];
    }
}
class OrderDetailModel {
    constructor() {
        // orderId:string;
        this.productName = '';
        this.productId = '';
        this.price = 0;
        this.quantity = 0;
        this.totalAmount = 0;
        this.productImgUrl = '';
    }
}


/***/ }),

/***/ "xwQH":
/*!**************************************************************************!*\
  !*** ./src/app/components/orders/update-order/update-order.component.ts ***!
  \**************************************************************************/
/*! exports provided: UpdateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrderComponent", function() { return UpdateOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/models */ "MFsa");
/* harmony import */ var src_app_lib_data_models_orders_order_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/data/models/orders/order.model */ "eLhG");
/* harmony import */ var src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/data/services/orders/order-details.service */ "EDFb");
/* harmony import */ var src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/data/services/orders/orders.service */ "1rpD");
/* harmony import */ var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/viewimagecell/viewimagecell.component */ "Ir4Y");
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ "rYn7");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */ "nL8c");
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ "whnt");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ "e9Dt");
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ "+fzg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ "mnGB");






















function UpdateOrderComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Full Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateOrderComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateOrderComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateOrderComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UpdateOrderComponent {
    constructor(formBuilder, ngbActiveModal, ordersService, orderDetailsService, messageService) {
        this.formBuilder = formBuilder;
        this.ngbActiveModal = ngbActiveModal;
        this.ordersService = ordersService;
        this.orderDetailsService = orderDetailsService;
        this.messageService = messageService;
        this.order = new src_app_lib_data_models_orders_order_model__WEBPACK_IMPORTED_MODULE_4__["OrderModel"]();
        this.submitted = false;
        this.settings = {
            mode: 'external',
            actions: false,
            columns: {
                productImgUrl: {
                    title: 'Image',
                    type: 'custom',
                    renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_7__["ViewImageCellComponent"],
                },
                productName: {
                    title: 'Product Name',
                },
                price: {
                    title: 'Price',
                    value: 'price',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_10__["CustomViewCellNumberComponent"],
                },
                quantity: {
                    title: 'Quantity',
                    value: 'quantity',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_11__["CustomViewCellComponent"],
                },
                totalAmount: {
                    title: 'Total Amount',
                    value: 'totalAmount',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_10__["CustomViewCellNumberComponent"],
                },
            },
        };
    }
    ngOnInit() {
        this.loadFormItem();
        this.createModal();
        this.getOrderDetails();
    }
    loadFormItem() {
        var check = this.item.status == 'Rejected';
        this.orderForm = this.formBuilder.group({
            fullName: [
                { value: this.item.fullName, disabled: check },
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
            address: [
                { value: this.item.address, disabled: check },
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
            email: [{ value: this.item.email, disabled: check }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [{ value: this.item.phone, disabled: check }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [
                { value: this.item.status, disabled: true },
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ],
        });
    }
    createModal() {
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_8__["ModalHeaderModel"]();
        this.modalHeader.title = `Update Order`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_8__["ModalFooterModel"]();
        this.modalFooter.buttons = [
            {
                color: 'btn btn-primary',
                title: 'close',
                onAction: (event) => {
                    this.ngbActiveModal.dismiss();
                },
            },
        ];
        if (this.item.status == 'New') {
            this.modalFooter.buttons = [
                {
                    color: 'btn btn-info',
                    title: 'save',
                    onAction: (event) => {
                        this.save();
                    },
                },
                {
                    color: 'btn btn-success',
                    title: 'approve',
                    onAction: (event) => {
                        this.approve();
                    },
                },
                {
                    color: 'btn btn-primary',
                    title: 'reject',
                    onAction: (event) => {
                        this.reject();
                    },
                },
            ];
        }
        if (this.item.status == 'Approved') {
            this.modalFooter.buttons = [
                {
                    color: 'btn btn-info',
                    title: 'save',
                    onAction: (event) => {
                        this.save();
                    },
                },
                {
                    color: 'btn btn-primary',
                    title: 'close',
                    onAction: (event) => {
                        this.ngbActiveModal.dismiss();
                    },
                },
            ];
        }
    }
    get orderFormControl() {
        return this.orderForm.controls;
    }
    loadOrderModel() {
        this.order = {
            fullName: this.orderForm.controls.fullName.value,
            address: this.orderForm.controls.address.value,
            email: this.orderForm.controls.email.value,
            phone: this.orderForm.controls.phone.value,
            status: this.item.status,
            id: this.item.id,
            totalAmount: this.item.totalAmount,
            totalItem: this.item.totalItem,
        };
    }
    save() {
        this.loadOrderModel();
        this.submitted = true;
        if (this.orderForm.valid) {
            this.ordersService
                .update(this.order)
                .then(() => {
                this.messageService.notification('Order has been edited', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].SUCCESS);
            })
                .catch((er) => {
                var _a, _b;
                this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].ERROR);
            });
        }
    }
    approve() {
        this.loadOrderModel();
        this.order.status = 'Approved';
        this.messageService
            .confirm(`Do you want to approve the order?`, 'Yes', 'No', false)
            .then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                this.submitted = true;
                if (this.orderForm.valid) {
                    this.ordersService
                        .update(this.order)
                        .then(() => {
                        this.messageService.notification('Order has been approved', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].SUCCESS);
                        this.ngbActiveModal.close();
                    })
                        .catch((er) => {
                        var _a, _b;
                        this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].ERROR);
                    });
                }
            }
        }));
    }
    reject() {
        this.loadOrderModel();
        this.order.status = 'Rejected';
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
            title: `Do you want to reject the order?`,
            input: 'text',
            inputPlaceholder: 'Why?',
            showCancelButton: true,
            confirmButtonText: `Yes`,
            icon: 'question',
        }).then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (result.isConfirmed) {
                this.submitted = true;
                this.order.note = result.value;
                console.log(result.value);
                if (this.orderForm.valid) {
                    this.ordersService
                        .update(this.order)
                        .then((res) => {
                        this.messageService.notification('Order has been rejected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].SUCCESS);
                        this.ngbActiveModal.close();
                    })
                        .catch((er) => {
                        var _a, _b;
                        this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].ERROR);
                        // if (er.error.hasError) {
                        //   console.log(er.error.message);
                        // }
                    });
                }
            }
        }));
    }
    getOrderDetails() {
        this.orderDetailsService
            .getByOrder(this.item.id, null)
            .then((res) => {
            if (!res.hasError) {
                this.orderDetails = res.data;
            }
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_3__["TypeSweetAlertIcon"].ERROR);
            // if (er.error.hasError) {
            //   console.log(er.error.message);
            // }
        });
    }
    close(event) {
        this.ngbActiveModal.dismiss();
    }
}
UpdateOrderComponent.ɵfac = function UpdateOrderComponent_Factory(t) { return new (t || UpdateOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"])); };
UpdateOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateOrderComponent, selectors: [["app-update-order"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"], src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsService"]])], decls: 53, vars: 10, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4"], ["type", "text", "required", "", "formControlName", "fullName", 1, "form-control", "col-xl-8", "col-md-7"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "required", "", "formControlName", "address", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "email", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "phone", 1, "form-control", "col-xl-8", "col-md-7"], ["type", "text", "required", "", "formControlName", "status", "readonly", "", 1, "form-control", "col-xl-8", "col-md-7"], [1, "col-12"], [1, "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "sourceChange"], [1, "text-danger"]], template: function UpdateOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAction", function UpdateOrderComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UpdateOrderComponent_span_16_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UpdateOrderComponent_span_23_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UpdateOrderComponent_span_30_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, UpdateOrderComponent_span_37_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Order Details List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ng2-smart-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sourceChange", function UpdateOrderComponent_Template_ng2_smart_table_sourceChange_51_listener($event) { return ctx.orderDetails = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "app-modal-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAction", function UpdateOrderComponent_Template_app_modal_footer_onAction_52_listener() { return ctx.approve(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.modalHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order ", ctx.item.code, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.fullName.touched || ctx.submitted) && (ctx.orderFormControl.fullName.errors == null ? null : ctx.orderFormControl.fullName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.address.touched || ctx.submitted) && (ctx.orderFormControl.address.errors == null ? null : ctx.orderFormControl.address.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.email.touched || ctx.submitted) && (ctx.orderFormControl.email.errors == null ? null : ctx.orderFormControl.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.orderFormControl.phone.touched || ctx.submitted) && (ctx.orderFormControl.phone.errors == null ? null : ctx.orderFormControl.phone.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.orderDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.modalFooter);
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_14__["ModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_16__["Ng2SmartTableComponent"], _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_17__["ModalFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpdateOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-update-order',
                templateUrl: './update-order.component.html',
                styleUrls: ['./update-order.component.scss'],
                providers: [src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"], src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsService"]],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbActiveModal"] }, { type: src_app_lib_data_services_orders_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] }, { type: src_app_lib_data_services_orders_order_details_service__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsService"] }, { type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_13__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "yiI2":
/*!****************************************************!*\
  !*** ./src/app/components/orders/orders.module.ts ***!
  \****************************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/data/services */ "LclG");
/* harmony import */ var _list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-order/list-orders.component */ "AQUe");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./orders-routing.module */ "S8gY");
/* harmony import */ var _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./update-order/update-order.component */ "xwQH");











class OrdersModule {
}
OrdersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function OrdersModule_Factory(t) { return new (t || OrdersModule)(); }, providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_6__["BannersService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_8__["OrdersRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_7__["ListOrdersComponent"], _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_9__["UpdateOrderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_8__["OrdersRoutingModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                    _orders_routing_module__WEBPACK_IMPORTED_MODULE_8__["OrdersRoutingModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
                declarations: [_list_order_list_orders_component__WEBPACK_IMPORTED_MODULE_7__["ListOrdersComponent"], _update_order_update_order_component__WEBPACK_IMPORTED_MODULE_9__["UpdateOrderComponent"]],
                providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_6__["BannersService"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-orders-orders-module-es2015.js.map