(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-customers-customers-module"],{

/***/ "+mji":
/*!*************************************************************************************!*\
  !*** ./src/app/components/customers/customer-details/customer-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/models */ "MFsa");
/* harmony import */ var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/lib/data/services */ "LclG");
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ "rYn7");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ "e9Dt");
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ "+fzg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/upload-file/upload-file.component */ "f7C/");
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ "mnGB");














function CustomerDetailsComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_16_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.f.username.errors.required);
} }
function CustomerDetailsComponent_div_17_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_17_div_6_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function CustomerDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, CustomerDetailsComponent_div_17_div_6_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx_r1.submitted && ctx_r1.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.submitted && ctx_r1.f.password.errors);
} }
function CustomerDetailsComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " FirstName is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_24_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.firstName.errors.required);
} }
function CustomerDetailsComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " LastName is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_31_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.lastName.errors.required);
} }
function CustomerDetailsComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_38_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Wrong type email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_38_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, CustomerDetailsComponent_div_38_div_2_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.f.email.errors.email);
} }
function CustomerDetailsComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_43_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.f.address.errors.required);
} }
function CustomerDetailsComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_48_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r6.f.phone.errors.required);
} }
function CustomerDetailsComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Image is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerDetailsComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, CustomerDetailsComponent_div_55_div_1_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.f.imageUrl.errors.required);
} }
class CustomerDetailsComponent {
    constructor(formBuilder, customerService, ngbActiveModal, messageService) {
        this.formBuilder = formBuilder;
        this.customerService = customerService;
        this.ngbActiveModal = ngbActiveModal;
        this.messageService = messageService;
        this.submitted = false;
        this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_4__["ModalFile"]();
        this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_4__["TypeFile"].IMAGE;
        this.modalFile.multiBoolen = false;
        this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_4__["EntityType"].USER;
    }
    ngOnInit() {
        this.loadItem();
        if (this.item) {
            this.fileURL = [];
            this.fileURL.push(this.item.imageUrl);
        }
    }
    loadItem() {
        this.usersForm = this.formBuilder.group({
            username: [this.item ? this.item.username : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [this.item ? this.item.password : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [
                this.item ? this.item.email : '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            ],
            firstName: [this.item ? this.item.firstName : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: [this.item ? this.item.lastName : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            imageUrl: [this.item ? this.item.imageUrl : ''],
            address: [this.item ? this.item.address : ''],
            phone: [this.item ? this.item.phone : ''],
        });
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_4__["ModalHeaderModel"]();
        this.modalHeader.title = this.item ? `Update ${this.item.username}` : `Add`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_4__["ModalFooterModel"]();
        this.modalFooter.title = 'Save';
    }
    get f() {
        return this.usersForm.controls;
    }
    save() {
        this.submitted = true;
        if (this.usersForm.invalid) {
            // console.log(this.usersForm);
            return;
        }
        this.user = {
            username: this.usersForm.value.username,
            password: this.usersForm.value.password,
            email: this.usersForm.value.email,
            firstName: this.usersForm.value.firstName,
            lastName: this.usersForm.value.lastName,
            imageUrl: this.usersForm.value.imageUrl,
            id: this.item ? this.item.id : '',
            files: this.modalFile.listFile,
            address: this.usersForm.value.address,
            phone: this.usersForm.value.phone,
        };
        this.callServiceToSave();
    }
    callServiceToSave() {
        this.customerService
            .save(this.user)
            .then(() => {
            this.messageService.notification(this.item ? 'Profile has been updated' : 'Profile has been created', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].SUCCESS);
            this.ngbActiveModal.close();
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR);
        });
    }
    close(event) {
        this.ngbActiveModal.dismiss();
    }
    onChangeData(event) {
        if (event == null) {
            return;
        }
        if (!this.fileURL) {
            this.fileURL = [];
        }
        if (event.add) {
            this.fileURL = [...this.fileURL, ...event.add];
        }
        if (event.remove) {
            this.fileURL.forEach((e, i) => {
                if (e.includes(event.remove)) {
                    this.fileURL.splice(i, 1);
                }
            });
        }
        if (event.removeAll) {
            this.fileURL = [];
        }
        this.usersForm.controls.imageUrl.setValue(this.fileURL.join(','));
    }
}
CustomerDetailsComponent.??fac = function CustomerDetailsComponent_Factory(t) { return new (t || CustomerDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
CustomerDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerDetailsComponent, selectors: [["app-customer-details"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]])], decls: 57, vars: 34, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "username", "autocomplete", "username", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["class", "invalid-feedback col-md-5 offset-md-3", 4, "ngIf"], ["class", "form-group row", 4, "ngIf"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "firstName", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "lastName", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "email", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "address", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "phone", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["type", "text", "formControlName", "imageUrl", "hidden", "", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "col-xl-8", "col-md-7", "p-0"], ["styleFile", "width: 100%; height: auto;", 3, "data", "fileURL", "onChange"], [1, "invalid-feedback", "col-md-5", "offset-md-3"], [4, "ngIf"], ["type", "password", "formControlName", "password", "autocomplete", "new-password", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"]], template: function CustomerDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onAction", function CustomerDetailsComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, CustomerDetailsComponent_div_16_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, CustomerDetailsComponent_div_17_Template, 7, 4, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " FirstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, CustomerDetailsComponent_div_24_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " LastName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, CustomerDetailsComponent_div_31_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, CustomerDetailsComponent_div_38_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](43, CustomerDetailsComponent_div_43_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, CustomerDetailsComponent_div_48_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, " Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "app-upload-file", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onChange", function CustomerDetailsComponent_Template_app_upload_file_onChange_54_listener($event) { return ctx.onChangeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, CustomerDetailsComponent_div_55_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "app-modal-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onAction", function CustomerDetailsComponent_Template_app_modal_footer_onAction_56_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.usersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](20, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.username.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](22, _c0, ctx.submitted && ctx.f.firstName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.firstName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](24, _c0, ctx.submitted && ctx.f.lastName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.lastName.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](28, _c0, ctx.submitted && ctx.f.address.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.address.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](30, _c0, ctx.submitted && ctx.f.phone.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.phone.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](32, _c0, ctx.submitted && ctx.f.imageUrl.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalFile)("fileURL", ctx.fileURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.imageUrl.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalFooter);
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["ModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_9__["UploadFileComponent"], _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_10__["ModalFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-details',
                templateUrl: './customer-details.component.html',
                styleUrls: ['./customer-details.component.scss'],
                providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] }, { type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "PPFG":
/*!**********************************************************!*\
  !*** ./src/app/components/customers/customers.module.ts ***!
  \**********************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "+mji");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customers-routing.module */ "iXlq");
/* harmony import */ var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./list-customers/list-customers.component */ "Udcd");











class CustomerModule {
}
CustomerModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: CustomerModule });
CustomerModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function CustomerModule_Factory(t) { return new (t || CustomerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _customers_routing_module__WEBPACK_IMPORTED_MODULE_8__["CustomerRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](CustomerModule, { declarations: [_list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_9__["ListCustomersComponent"],
        _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _customers_routing_module__WEBPACK_IMPORTED_MODULE_8__["CustomerRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CustomerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_9__["ListCustomersComponent"],
                    _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_7__["CustomerDetailsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _customers_routing_module__WEBPACK_IMPORTED_MODULE_8__["CustomerRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
                    _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Udcd":
/*!*********************************************************************************!*\
  !*** ./src/app/components/customers/list-customers/list-customers.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCustomersComponent", function() { return ListCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/data/models */ "MFsa");
/* harmony import */ var src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/services */ "LclG");
/* harmony import */ var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */ "rh+S");
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ "whnt");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-details/customer-details.component */ "+mji");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ "e9Dt");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/paging-server-view/paging-server-view.component */ "sirP");













function ListCustomersComponent_app_paging_server_view_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-paging-server-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function ListCustomersComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r1.onPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx_r0.data);
} }
class ListCustomersComponent {
    constructor(modalService, customerService, messageService) {
        this.modalService = modalService;
        this.customerService = customerService;
        this.messageService = messageService;
        this.closeResult = '';
        this.params = {};
        this.settings = {
            mode: 'external',
            actions: {
                position: 'right',
            },
            columns: {
                username: {
                    title: 'Username',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewCellStringComponent"],
                },
                firstName: {
                    title: 'First Name', type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewCellStringComponent"],
                },
                lastName: {
                    title: 'Last Name', type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewCellStringComponent"],
                },
                email: {
                    title: 'Email', type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewCellStringComponent"],
                },
                phone: {
                    title: 'Phone',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_4__["CustomViewCellComponent"],
                },
            },
        };
        this.getList();
    }
    ngOnInit() { }
    delete(event) {
        let category = event.data;
        this.messageService.confirm(`Do you want to delete the customer?`, 'Yes').then((it) => {
            if (it.isConfirmed) {
                this.customerService
                    .delete(category)
                    .then((it) => {
                    this.messageService.notification(`Customer has been deleted`, src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].SUCCESS);
                    this.getList();
                })
                    .catch((er) => {
                    var _a, _b;
                    this.messageService.notification(`Delete Fail`, src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].ERROR, (_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected');
                });
            }
        });
    }
    openPopup(item) {
        var modalRef = this.modalService.open(_customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailsComponent"], {
            size: 'lg',
        });
        if (item)
            modalRef.componentInstance.item = item.data;
        modalRef.result.then((close) => {
            this.getList();
        }, (dismiss) => { });
    }
    getList() {
        this.customerService
            .get({ params: this.params })
            .then((res) => {
            if (!res.hasError) {
                this.customers = res.data.results;
                this.data = res.data;
            }
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].ERROR);
        });
    }
    onPage(event) {
        this.params.pageIndex = event;
        this.getList();
    }
}
ListCustomersComponent.??fac = function ListCustomersComponent_Factory(t) { return new (t || ListCustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"])); };
ListCustomersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ListCustomersComponent, selectors: [["app-list-customers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]])], decls: 10, vars: 3, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete", "sourceChange"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]], template: function ListCustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("edit", function ListCustomersComponent_Template_ng2_smart_table_edit_8_listener($event) { return ctx.openPopup($event); })("create", function ListCustomersComponent_Template_ng2_smart_table_create_8_listener() { return ctx.openPopup(null); })("delete", function ListCustomersComponent_Template_ng2_smart_table_delete_8_listener($event) { return ctx.delete($event); })("sourceChange", function ListCustomersComponent_Template_ng2_smart_table_sourceChange_8_listener($event) { return ctx.customers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ListCustomersComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings)("source", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_10__["PagingServerViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWN1c3RvbWVycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListCustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-customers',
                templateUrl: './list-customers.component.html',
                styleUrls: ['./list-customers.component.scss'],
                providers: [src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__["CustomerService"]],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_lib_data_services__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }, { type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "iXlq":
/*!******************************************************************!*\
  !*** ./src/app/components/customers/customers-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "+mji");
/* harmony import */ var _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-customers/list-customers.component */ "Udcd");






const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-customers',
                component: _list_customers_list_customers_component__WEBPACK_IMPORTED_MODULE_3__["ListCustomersComponent"],
                data: {
                    title: "Customer List",
                    breadcrumb: "Customer List"
                }
            },
            {
                path: 'create-customers',
                component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_2__["CustomerDetailsComponent"],
                data: {
                    title: "Create Customer",
                    breadcrumb: "Create Customer"
                }
            },
        ]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rh+S":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CustomViewCellStringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomViewCellStringComponent", function() { return CustomViewCellStringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CustomViewCellStringComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomViewCellStringComponent.??fac = function CustomViewCellStringComponent_Factory(t) { return new (t || CustomViewCellStringComponent)(); };
CustomViewCellStringComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomViewCellStringComponent, selectors: [["app-custom-view-cell-string"]], inputs: { value: "value", rowData: "rowData" }, decls: 2, vars: 1, consts: [[1, "text-left"]], template: function CustomViewCellStringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.value);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20tdmlldy1jZWxsLXN0cmluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomViewCellStringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-custom-view-cell-string',
                templateUrl: './custom-view-cell-string.component.html',
                styleUrls: ['./custom-view-cell-string.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=components-customers-customers-module-es2015.js.map