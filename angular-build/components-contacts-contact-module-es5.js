(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-contacts-contact-module"], {
    /***/
    "6g/v":
    /*!*******************************************************!*\
      !*** ./src/app/components/contacts/contact.module.ts ***!
      \*******************************************************/

    /*! exports provided: ContactModule */

    /***/
    function gV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactModule", function () {
        return ContactModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "zioG");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact-details/contact-details.component */
      "Zsws");
      /* harmony import */


      var _contact_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./contact-routing.module */
      "kP8E");
      /* harmony import */


      var _list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./list-contact/list-contact.component */
      "GYk5");

      var ContactModule = function ContactModule() {
        _classCallCheck(this, ContactModule);
      };

      ContactModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: ContactModule
      });
      ContactModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function ContactModule_Factory(t) {
          return new (t || ContactModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_8__["ContactRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ContactModule, {
          declarations: [_list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_9__["ListContactComponent"], _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_8__["ContactRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ContactModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_9__["ListContactComponent"], _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_7__["ContactDetailComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _contact_routing_module__WEBPACK_IMPORTED_MODULE_8__["ContactRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "C0G+":
    /*!***************************************************************!*\
      !*** ./src/app/lib/data/services/contacts/contact.service.ts ***!
      \***************************************************************/

    /*! exports provided: ContactService */

    /***/
    function C0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactService", function () {
        return ContactService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/http/http-client */
      "zzwl");

      var ContactService = /*#__PURE__*/function () {
        function ContactService(httpClient) {
          _classCallCheck(this, ContactService);

          this.httpClient = httpClient;
          this.url = '/api/contact';
        }

        _createClass(ContactService, [{
          key: "getList",
          value: function getList(request) {
            return this.httpClient.getObservable(this.url, request).toPromise();
          }
        }, {
          key: "create",
          value: function create(model) {
            return this.httpClient.postObservable(this.url, model).toPromise();
          }
        }, {
          key: "update",
          value: function update(model) {
            return this.httpClient.putObservable(this.url, model).toPromise();
          }
        }, {
          key: "delete",
          value: function _delete(model) {
            var url = "".concat(this.url, "/?id=").concat(model === null || model === void 0 ? void 0 : model.id);
            return this.httpClient.deleteObservable(url).toPromise();
          }
        }, {
          key: "save",
          value: function save(model) {
            if (model.id) {
              return this.update(model);
            }

            return this.create(model);
          }
        }]);

        return ContactService;
      }();

      ContactService.??fac = function ContactService_Factory(t) {
        return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]));
      };

      ContactService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
        token: ContactService,
        factory: ContactService.??fac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: src_app_lib_http_http_client__WEBPACK_IMPORTED_MODULE_1__["HttpClientService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GYk5":
    /*!****************************************************************************!*\
      !*** ./src/app/components/contacts/list-contact/list-contact.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ListContactComponent */

    /***/
    function GYk5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListContactComponent", function () {
        return ListContactComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/models */
      "MFsa");
      /* harmony import */


      var src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/contacts/contact.service */
      "C0G+");
      /* harmony import */


      var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */
      "rh+S");
      /* harmony import */


      var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/customViewCell/customViewCell.component */
      "whnt");
      /* harmony import */


      var _contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../contact-details/contact-details.component */
      "Zsws");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      "e9Dt");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/paging-server-view/paging-server-view.component */
      "sirP");

      function ListContactComponent_app_paging_server_view_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "app-paging-server-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("page", function ListContactComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

            return ctx_r1.onPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("data", ctx_r0.data);
        }
      }

      var ListContactComponent = /*#__PURE__*/function () {
        function ListContactComponent(modalService, contactService, messageService, datePipe) {
          var _this = this;

          _classCallCheck(this, ListContactComponent);

          this.modalService = modalService;
          this.contactService = contactService;
          this.messageService = messageService;
          this.datePipe = datePipe;
          this.params = {};
          this.settings = {
            mode: 'external',
            pager: {
              display: true,
              perPage: 10
            },
            actions: {
              position: 'right',
              add: false,
              "delete": false
            },
            columns: {
              firstName: {
                title: 'First Name',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_4__["CustomViewCellStringComponent"]
              },
              lastName: {
                title: 'Last Name',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_4__["CustomViewCellStringComponent"]
              },
              phoneNumber: {
                title: 'Phone Number',
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_5__["CustomViewCellComponent"]
              },
              email: {
                title: 'Email'
              },
              status: {
                title: 'Status'
              },
              createByDate: {
                title: 'Create Date',
                valuePrepareFunction: function valuePrepareFunction(date) {
                  return _this.datePipe.transform(new Date(date), 'dd/MM/yyyy');
                },
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_5__["CustomViewCellComponent"]
              }
            }
          };
          this.getList();
        }

        _createClass(ListContactComponent, [{
          key: "openPopup",
          value: function openPopup(item) {
            var _this2 = this;

            var modalRef = this.modalService.open(_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_6__["ContactDetailComponent"], {
              size: 'lg'
            });
            if (item) modalRef.componentInstance.item = item.data;
            if (!item) modalRef.componentInstance.item = item;
            modalRef.result.then(function (close) {
              _this2.getList();
            }, function (dismiss) {});
          }
        }, {
          key: "delete",
          value: function _delete(event) {
            var _this3 = this;

            this.messageService.confirm("Do you want to delete the category?", 'Yes').then(function (res) {
              if (res.isConfirmed) {
                var contact = event.data;

                _this3.contactService["delete"](contact).then(function () {
                  _this3.messageService.notification('Contact has been deleted', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].SUCCESS);

                  _this3.getList();
                });
              }
            });
          }
        }, {
          key: "getList",
          value: function getList() {
            var _this4 = this;

            this.contactService.getList(null).then(function (res) {
              if (!res.hasError) {
                _this4.contacts = res.data; // console.log('contact', res.data);
              }
            })["catch"](function (er) {
              if (er.error.hasError) {// console.log(er.error.message);
              }
            });
          }
        }, {
          key: "onPage",
          value: function onPage(event) {
            this.params.pageIndex = event;
            this.getList();
          }
        }]);

        return ListContactComponent;
      }();

      ListContactComponent.??fac = function ListContactComponent_Factory(t) {
        return new (t || ListContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]));
      };

      ListContactComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: ListContactComponent,
        selectors: [["app-list-page-content"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])],
        decls: 10,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], [1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete", "sourceChange"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]],
        template: function ListContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "Contact Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "ng2-smart-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("edit", function ListContactComponent_Template_ng2_smart_table_edit_8_listener($event) {
              return ctx.openPopup($event);
            })("create", function ListContactComponent_Template_ng2_smart_table_create_8_listener() {
              return ctx.openPopup(null);
            })("delete", function ListContactComponent_Template_ng2_smart_table_delete_8_listener($event) {
              return ctx["delete"]($event);
            })("sourceChange", function ListContactComponent_Template_ng2_smart_table_sourceChange_8_listener($event) {
              return ctx.contacts = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](9, ListContactComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("settings", ctx.settings)("source", ctx.contacts);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["Ng2SmartTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_10__["PagingServerViewComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbnRhY3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ListContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-list-page-content',
            templateUrl: './list-contact.component.html',
            styleUrls: ['./list-contact.component.scss'],
            providers: [src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]
          }, {
            type: src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]
          }, {
            type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_8__["MessageService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Zsws":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/contacts/contact-details/contact-details.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ContactDetailComponent */

    /***/
    function Zsws(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactDetailComponent", function () {
        return ContactDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/lib/customCkeditor/ckeditor5-build-classic */
      "L7VZ");
      /* harmony import */


      var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/@ckeditor/Base64Upload */
      "SZd/");
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      "rYn7");
      /* harmony import */


      var src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/lib/data/services/contacts/contact.service */
      "C0G+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-header/modal-header.component */
      "+fzg");
      /* harmony import */


      var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-footer/modal-footer.component */
      "mnGB");

      var ContactDetailComponent = /*#__PURE__*/function () {
        function ContactDetailComponent(formBuilder, pageContentService, ngbActiveModal) {
          _classCallCheck(this, ContactDetailComponent);

          this.formBuilder = formBuilder;
          this.pageContentService = pageContentService;
          this.ngbActiveModal = ngbActiveModal;
          this.editor = src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
          this.editorConfig = {
            extraPlugins: [src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_2__["default"]]
          };
        }

        _createClass(ContactDetailComponent, [{
          key: "onReady",
          value: function onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadItem();
            this.createModal();
          }
        }, {
          key: "createModal",
          value: function createModal() {
            var _this5 = this;

            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["ModalHeaderModel"]();
            this.modalHeader.title = "Update Contact";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_3__["ModalFooterModel"]();
            this.modalFooter.buttons = [{
              color: 'btn btn-primary',
              title: 'close',
              onAction: function onAction(event) {
                _this5.ngbActiveModal.dismiss();
              }
            }];

            if (this.item.status == 'Pending') {
              this.modalFooter.buttons = [{
                color: 'btn btn-success',
                title: 'Progress',
                onAction: function onAction(event) {
                  _this5.progress();
                }
              }, {
                color: 'btn btn-primary',
                title: 'Complete',
                onAction: function onAction(event) {
                  _this5.complete();
                }
              }];
            }

            if (this.item.status == 'In Progress') {
              this.modalFooter.buttons = [{
                color: 'btn btn-primary',
                title: 'Complete',
                onAction: function onAction(event) {
                  _this5.complete();
                }
              }];
            }
          }
        }, {
          key: "loadItem",
          value: function loadItem() {
            this.pageContentForm = this.formBuilder.group({
              firstName: [this.item ? this.item.firstName : ''],
              lastName: [this.item ? this.item.lastName : ''],
              email: [this.item ? this.item.email : ''],
              phoneNumber: [this.item ? this.item.phoneNumber : ''],
              message: [this.item ? this.item.message : ''],
              status: [this.item ? this.item.status : '']
            });
          }
        }, {
          key: "loadModel",
          value: function loadModel() {
            this.contact = {
              id: this.item ? this.item.id : '',
              firstName: this.pageContentForm.value.firstName,
              lastName: this.pageContentForm.value.lastName,
              email: this.pageContentForm.value.email,
              phoneNumber: this.pageContentForm.value.phoneNumber,
              message: this.pageContentForm.value.message,
              status: this.item.status
            };
          }
        }, {
          key: "callServiceToSave",
          value: function callServiceToSave() {
            var _this6 = this;

            this.pageContentService.save(this.contact).then(function () {
              _this6.ngbActiveModal.close();
            })["catch"](function (er) {
              if (er.error.hasError) {// console.log(er.error.message);
              }
            });
          }
        }, {
          key: "progress",
          value: function progress() {
            if (this.pageContentForm.invalid) {
              // console.log(this.pageContentForm);
              return;
            }

            this.loadModel();
            this.contact.status = "In Progress";
            this.callServiceToSave();
          }
        }, {
          key: "complete",
          value: function complete() {
            if (this.pageContentForm.invalid) {
              // console.log(this.pageContentForm);
              return;
            }

            this.loadModel();
            this.contact.status = "Completed";
            this.callServiceToSave();
          }
        }, {
          key: "close",
          value: function close(event) {
            this.ngbActiveModal.dismiss();
          }
        }]);

        return ContactDetailComponent;
      }();

      ContactDetailComponent.??fac = function ContactDetailComponent_Factory(t) {
        return new (t || ContactDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]));
      };

      ContactDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ContactDetailComponent,
        selectors: [["app-contact-details"]],
        inputs: {
          item: "item"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])],
        decls: 35,
        vars: 3,
        consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "form-group", "row"], [1, "col-xl-3", "col-md-4"], ["type", "text", "formControlName", "firstName", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "lastName", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "email", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "phoneNumber", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["rows", "4", "formControlName", "message", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"], ["type", "text", "formControlName", "status", "readonly", "", 1, "form-control", "col-xl-9", "col-md-8"]],
        template: function ContactDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onAction", function ContactDetailComponent_Template_app_modal_header_onAction_0_listener($event) {
              return ctx.close($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Contact Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, " Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "textarea", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, " Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onAction", function ContactDetailComponent_Template_app_modal_footer_onAction_34_listener() {
              return ctx.complete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.pageContentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_7__["ModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_8__["ModalFooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact-details',
            templateUrl: './contact-details.component.html',
            styleUrls: ['./contact-details.component.scss'],
            providers: [src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }, {
            type: src_app_lib_data_services_contacts_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]
          }];
        }, {
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "kP8E":
    /*!***************************************************************!*\
      !*** ./src/app/components/contacts/contact-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: ContactRouting */

    /***/
    function kP8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactRouting", function () {
        return ContactRouting;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-contact/list-contact.component */
      "GYk5");

      var routes = [{
        path: '',
        children: [{
          path: 'list-contact',
          component: _list_contact_list_contact_component__WEBPACK_IMPORTED_MODULE_2__["ListContactComponent"],
          data: {
            title: 'Contact List',
            breadcrumb: 'Contact List'
          }
        }]
      }];

      var ContactRouting = function ContactRouting() {
        _classCallCheck(this, ContactRouting);
      };

      ContactRouting.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ContactRouting
      });
      ContactRouting.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ContactRouting_Factory(t) {
          return new (t || ContactRouting)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ContactRouting, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactRouting, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-contacts-contact-module-es5.js.map