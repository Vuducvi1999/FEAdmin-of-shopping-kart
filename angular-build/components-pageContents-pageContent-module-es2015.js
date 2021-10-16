(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-pageContents-pageContent-module"],{

/***/ "2b8W":
/*!***********************************************************************!*\
  !*** ./src/app/components/pageContents/pageContent-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PageContentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentRouting", function() { return PageContentRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_pageContent_list_page_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-pageContent/list-page-content.component */ "j+QM");





const routes = [
    {
        path: '',
        children: [
            {
                path: 'list-page-content',
                component: _list_pageContent_list_page_content_component__WEBPACK_IMPORTED_MODULE_2__["ListPageContentComponent"],
                data: {
                    title: 'Page Content List',
                    breadcrumb: 'Page Content List',
                },
            },
        ],
    },
];
class PageContentRouting {
}
PageContentRouting.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageContentRouting });
PageContentRouting.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageContentRouting_Factory(t) { return new (t || PageContentRouting)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageContentRouting, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageContentRouting, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "5cxU":
/*!***************************************************************!*\
  !*** ./src/app/components/pageContents/pageContent.module.ts ***!
  \***************************************************************/
/*! exports provided: PageContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentModule", function() { return PageContentModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _list_pageContent_list_page_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-pageContent/list-page-content.component */ "j+QM");
/* harmony import */ var _pageContent_details_page_content_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageContent-details/page-content-details.component */ "6ReS");
/* harmony import */ var _pageContent_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pageContent-routing.module */ "2b8W");











class PageContentModule {
}
PageContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PageContentModule });
PageContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PageContentModule_Factory(t) { return new (t || PageContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _pageContent_routing_module__WEBPACK_IMPORTED_MODULE_9__["PageContentRouting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PageContentModule, { declarations: [_list_pageContent_list_page_content_component__WEBPACK_IMPORTED_MODULE_7__["ListPageContentComponent"], _pageContent_details_page_content_details_component__WEBPACK_IMPORTED_MODULE_8__["PageContentDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _pageContent_routing_module__WEBPACK_IMPORTED_MODULE_9__["PageContentRouting"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"],
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PageContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_list_pageContent_list_page_content_component__WEBPACK_IMPORTED_MODULE_7__["ListPageContentComponent"], _pageContent_details_page_content_details_component__WEBPACK_IMPORTED_MODULE_8__["PageContentDetailComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _pageContent_routing_module__WEBPACK_IMPORTED_MODULE_9__["PageContentRouting"],
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

/***/ "6ReS":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/pageContents/pageContent-details/page-content-details.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PageContentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentDetailComponent", function() { return PageContentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/services/pageContents/pageContent.service */ "owSK");
/* harmony import */ var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/modals/models/modal.model */ "rYn7");
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/lib/data/models */ "MFsa");
/* harmony import */ var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/lib/customCkeditor/ckeditor5-build-classic */ "L7VZ");
/* harmony import */ var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/lib/@ckeditor/Base64Upload */ "SZd/");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ "e9Dt");
/* harmony import */ var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/modals/modal-header/modal-header.component */ "+fzg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/upload-file/upload-file.component */ "f7C/");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "zioG");
/* harmony import */ var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/modals/modal-footer/modal-footer.component */ "mnGB");



// import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';



// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';











function PageContentDetailComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageContentDetailComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PageContentDetailComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid ": a0 }; };
const _c1 = function (a0) { return { "invalid-ckeditor": a0 }; };
class PageContentDetailComponent {
    constructor(formBuilder, pageContentService, ngbActiveModal, messageService) {
        this.formBuilder = formBuilder;
        this.pageContentService = pageContentService;
        this.ngbActiveModal = ngbActiveModal;
        this.messageService = messageService;
        this.submitted = false;
        this.editor = src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_5__;
        this.editorConfig = {
            extraPlugins: [src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_6__["default"]],
        };
        this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["ModalFile"]();
        this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["TypeFile"].IMAGE;
        this.modalFile.multiBoolen = false;
        this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["EntityType"].BANNER;
    }
    onReady(editor) {
        editor.ui
            .getEditableElement()
            .parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    }
    ngOnInit() {
        var _a;
        this.loadItem();
        if ((_a = this.item) === null || _a === void 0 ? void 0 : _a.imageUrl) {
            this.fileURL = [];
            this.item.imageUrl.split(',').forEach((it) => {
                this.fileURL.push(it);
            });
        }
    }
    loadItem() {
        this.pageContentForm = this.formBuilder.group({
            title: [this.item ? this.item.title : '', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            shortDes: [this.item ? this.item.shortDes : ''],
            imageUrl: [this.item ? this.item.imageUrl : ''],
            order: [this.item ? this.item.order : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [
                this.item ? this.item.description : '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
        });
        this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["ModalHeaderModel"]();
        this.modalHeader.title = this.item ? `Update` : `Add`;
        this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["ModalFooterModel"]();
        this.modalFooter.title = 'Save';
    }
    get pageContentFormControl() {
        return this.pageContentForm.controls;
    }
    save() {
        this.submitted = true;
        if (this.pageContentForm.invalid) {
            return;
        }
        this.pageContent = {
            id: this.item ? this.item.id : '',
            title: this.pageContentForm.value.title.trim(),
            description: this.pageContentForm.value.description,
            imageUrl: this.pageContentForm.controls.imageUrl.value,
            shortDes: this.pageContentForm.value.shortDes.trim(),
            order: this.pageContentForm.value.order,
            files: this.modalFile.listFile,
        };
        this.callServiceToSave();
    }
    callServiceToSave() {
        this.pageContentService
            .saveChange(this.pageContent)
            .then(() => {
            this.messageService.notification(this.item ? 'Update Success' : 'Create Success', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_4__["TypeSweetAlertIcon"].SUCCESS);
            this.ngbActiveModal.close();
            this.submitted = false;
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_4__["TypeSweetAlertIcon"].ERROR);
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
        this.pageContentForm.controls.imageUrl.setValue(this.fileURL.join(','));
    }
}
PageContentDetailComponent.ɵfac = function PageContentDetailComponent_Factory(t) { return new (t || PageContentDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"])); };
PageContentDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageContentDetailComponent, selectors: [["app-page-content-details"]], inputs: { item: "item" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"]])], decls: 50, vars: 20, consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4", "d-flex", "flex-column"], ["type", "text", "formControlName", "title", 1, "form-control", "col-xl-9", "col-md-8", 3, "ngClass"], [1, "invalid-feedback", "offset-md-4", "offset-xl-3"], ["class", "text-danger", 4, "ngIf"], [1, "col-xl-3", "col-md-4"], ["rows", "4", "role", "textbox", "formControlName", "shortDes", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "number", "formControlName", "order", 1, "form-control", "col-xl-9", "col-md-8", 3, "ngClass"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4", "d-flex", "flex-column"], ["id", "validationCustom2", "type", "text", "formControlName", "imageUrl", "hidden", "", 1, "form-control", "col-xl-8", "col-md-7"], [1, "col-xl-9", "col-md-8", "p-0"], ["styleFile", "width: 100%; height: auto;", 3, "data", "fileURL", "onChange"], [1, "col-11", "pb-2", "d-flex"], [1, "d-flex", "mr-2"], [1, "mr-1"], [1, "invalid-feedback", "d-block"], ["type", "text", "formControlName", "description", 1, "col-12", "p-0", 3, "editor", "config", "ngClass", "ready"], [1, "text-danger"]], template: function PageContentDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function PageContentDetailComponent_Template_app_modal_header_onAction_0_listener($event) { return ctx.close($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Content Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PageContentDetailComponent_span_18_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Short Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Display Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PageContentDetailComponent_span_32_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-upload-file", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function PageContentDetailComponent_Template_app_upload_file_onChange_39_listener($event) { return ctx.onChangeData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PageContentDetailComponent_span_47_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ckeditor", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function PageContentDetailComponent_Template_ckeditor_ready_48_listener($event) { return ctx.onReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-modal-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function PageContentDetailComponent_Template_app_modal_footer_onAction_49_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.modalHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pageContentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && (ctx.pageContentFormControl.title.errors == null ? null : ctx.pageContentFormControl.title.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.pageContentFormControl.title.errors == null ? null : ctx.pageContentFormControl.title.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.submitted && (ctx.pageContentFormControl.order.errors == null ? null : ctx.pageContentFormControl.order.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.pageContentFormControl.order.errors == null ? null : ctx.pageContentFormControl.order.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.modalFile)("fileURL", ctx.fileURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && (ctx.pageContentFormControl.description.errors == null ? null : ctx.pageContentFormControl.description.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.editor)("config", ctx.editorConfig)("config", ctx.editorConfig)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.submitted && (ctx.pageContentFormControl.description.errors == null ? null : ctx.pageContentFormControl.description.errors.required)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.modalFooter);
    } }, directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_9__["ModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_11__["UploadFileComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_12__["CKEditorComponent"], _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_13__["ModalFooterComponent"]], styles: [".invalid-ckeditor[_ngcontent-%COMP%] {\n  box-shadow: rgba(220, 53, 69, 0.25) 0px 0px 0px 0.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccGFnZS1jb250ZW50LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzREFBQTtBQUNGIiwiZmlsZSI6InBhZ2UtY29udGVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtY2tlZGl0b3Ige1xyXG4gIGJveC1zaGFkb3c6IHJnYigyMjAgNTMgNjkgLyAyNSUpIDBweCAwcHggMHB4IDAuMnJlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageContentDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-content-details',
                templateUrl: './page-content-details.component.html',
                styleUrls: ['./page-content-details.component.scss'],
                providers: [src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"]],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbActiveModal"] }, { type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "j+QM":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pageContents/list-pageContent/list-page-content.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ListPageContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageContentComponent", function() { return ListPageContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/data/models */ "MFsa");
/* harmony import */ var src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/lib/data/services/pageContents/pageContent.service */ "owSK");
/* harmony import */ var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */ "rh+S");
/* harmony import */ var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/customViewCell/customViewCell.component */ "whnt");
/* harmony import */ var _pageContent_details_page_content_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pageContent-details/page-content-details.component */ "6ReS");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/lib/data/services/messages/message.service */ "e9Dt");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");











class ListPageContentComponent {
    constructor(modalService, service, messageService) {
        this.modalService = modalService;
        this.service = service;
        this.messageService = messageService;
        this.settings = {
            mode: 'external',
            pager: {
                display: true,
                perPage: 10,
            },
            actions: {
                position: 'right',
            },
            columns: {
                title: {
                    title: 'Title',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewCellStringComponent"],
                },
                shortDes: {
                    title: 'Short Description',
                    type: 'custom',
                    renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_3__["CustomViewCellStringComponent"],
                },
                order: {
                    title: 'Display Order',
                    value: 'order',
                    type: 'custom',
                    renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_4__["CustomViewCellComponent"],
                },
            },
        };
        this.getList();
    }
    openPopup(item) {
        var modalRef = this.modalService.open(_pageContent_details_page_content_details_component__WEBPACK_IMPORTED_MODULE_5__["PageContentDetailComponent"], {
            size: 'lg',
        });
        if (item)
            modalRef.componentInstance.item = item.data;
        if (!item)
            modalRef.componentInstance.item = item;
        modalRef.result.then((close) => {
            this.getList();
        }, (dismiss) => { });
    }
    getList() {
        this.service
            .get(null)
            .then((res) => {
            if (!res.hasError) {
                this.pageContents = res.data;
            }
        })
            .catch((er) => {
            var _a, _b;
            this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].ERROR);
            // if (er.error.hasError) {
            //   // console.log(er.error.message);
            // }
        });
    }
    delete(event) {
        if (event.data.id == '00000000-0000-0000-0000-000000000001' ||
            event.data.id == '00000000-0000-0000-0000-000000000002' ||
            event.data.id == '00000000-0000-0000-0000-000000000003') {
            this.messageService.alert('Your access permissions may be inadequate to perform the requested operation on this resource.', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].INFO);
            return;
        }
        this.messageService
            .confirm(`Do you want to delete the page content?`)
            .then((res) => {
            if (res.isConfirmed) {
                let id = event.data.id;
                this.service
                    .delete(id)
                    .then(() => {
                    this.messageService.notification('Page content has been deleted', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].SUCCESS);
                    this.getList();
                })
                    .catch((er) => {
                    var _a, _b;
                    this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_1__["TypeSweetAlertIcon"].ERROR);
                });
            }
        });
    }
}
ListPageContentComponent.ɵfac = function ListPageContentComponent_Factory(t) { return new (t || ListPageContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"])); };
ListPageContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListPageContentComponent, selectors: [["app-list-page-content"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"]])], decls: 9, vars: 2, consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "create", "edit", "delete", "sourceChange"]], template: function ListPageContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page Content Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ng2-smart-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("create", function ListPageContentComponent_Template_ng2_smart_table_create_8_listener() { return ctx.openPopup(null); })("edit", function ListPageContentComponent_Template_ng2_smart_table_edit_8_listener($event) { return ctx.openPopup($event); })("delete", function ListPageContentComponent_Template_ng2_smart_table_delete_8_listener($event) { return ctx.delete($event); })("sourceChange", function ListPageContentComponent_Template_ng2_smart_table_sourceChange_8_listener($event) { return ctx.pageContents = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.pageContents);
    } }, directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_8__["Ng2SmartTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXBhZ2UtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListPageContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-page-content',
                templateUrl: './list-page-content.component.html',
                styleUrls: ['./list-page-content.component.scss'],
                providers: [src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"]],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: src_app_lib_data_services_pageContents_pageContent_service__WEBPACK_IMPORTED_MODULE_2__["PageContentService"] }, { type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "owSK":
/*!***********************************************************************!*\
  !*** ./src/app/lib/data/services/pageContents/pageContent.service.ts ***!
  \***********************************************************************/
/*! exports provided: PageContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageContentService", function() { return PageContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/lib/http/http-client */ "zzwl");



class PageContentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.url = '/api/page-content';
    }
    get(request) {
        return this.httpClient.getObservable(this.url, request).toPromise();
    }
    update(model) {
        return this.httpClient.putObservable(this.url, model).toPromise();
    }
    create(model) {
        return this.httpClient.postObservable(this.url, model).toPromise();
    }
    delete(id) {
        const url = `${this.url}/?id=${id}`;
        return this.httpClient.deleteObservable(url).toPromise();
    }
    saveChange(model) {
        if (model.id)
            return this.update(model);
        return this.create(model);
    }
}
PageContentService.ɵfac = function PageContentService_Factory(t) { return new (t || PageContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"])); };
PageContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageContentService, factory: PageContentService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-pageContents-pageContent-module-es2015.js.map