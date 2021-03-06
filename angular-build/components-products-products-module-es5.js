(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"], {
    /***/
    "1+d4":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/products/product-details/product-details.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ProductDetailsComponent */

    /***/
    function d4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
        return ProductDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/models */
      "MFsa");
      /* harmony import */


      var src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/categories/category.service */
      "RkF1");
      /* harmony import */


      var src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/lib/data/services/products/product.service */
      "zILp");
      /* harmony import */


      var src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/modals/models/modal.model */
      "rYn7");
      /* harmony import */


      var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/lib/customCkeditor/ckeditor5-build-classic */
      "L7VZ");
      /* harmony import */


      var src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/lib/@ckeditor/Base64Upload */
      "SZd/");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      "e9Dt");
      /* harmony import */


      var _shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-header/modal-header.component */
      "+fzg");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/components/upload-file/upload-file.component */
      "f7C/");
      /* harmony import */


      var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ckeditor/ckeditor5-angular */
      "zioG");
      /* harmony import */


      var _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../shared/components/modals/modal-footer/modal-footer.component */
      "mnGB"); // import * as DecoupledEditor from 'src/app/lib/customCkeditor/ckeditor5-build-decoupled-document';


      function ProductDetailsComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Max: 50 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Min: 3 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Max: 300 character");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Value must in range (1 ~ 5000000)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Value must in range (1 ~ 5000000)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_option_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var category_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", category_r12.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", category_r12.name, " ");
        }
      }

      function ProductDetailsComponent_span_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      function ProductDetailsComponent_span_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid ": a0
        };
      };

      var ProductDetailsComponent = /*#__PURE__*/function () {
        function ProductDetailsComponent(formBuilder, productService, ngbActiveModal, categoryService, messageService) {
          _classCallCheck(this, ProductDetailsComponent);

          this.formBuilder = formBuilder;
          this.productService = productService;
          this.ngbActiveModal = ngbActiveModal;
          this.categoryService = categoryService;
          this.messageService = messageService;
          this.regex = '^[a-z|A-Z|??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????|0-9 ,-.]*$';
          this.submitted = false;
          this.editor = src_app_lib_customCkeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_6__;
          this.editorConfig = {
            extraPlugins: [src_app_lib_ckeditor_Base64Upload__WEBPACK_IMPORTED_MODULE_7__["default"]]
          };
          this.modalFile = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__["ModalFile"]();
          this.modalFile.typeFile = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__["TypeFile"].IMAGE;
          this.modalFile.multiBoolen = true;
          this.modalFile.enityType = src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__["EntityType"].PRODUCT;
        }

        _createClass(ProductDetailsComponent, [{
          key: "onReady",
          value: function onReady(editor) {
            editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {}
        }, {
          key: "productFormsControl",
          get: function get() {
            return this.productsForm.controls;
          }
        }, {
          key: "fetchCategory",
          value: function fetchCategory() {
            var _this = this;

            this.categoryService.get(null).then(function (res) {
              if (!res.hasError) {
                _this.categories = res.data.results.filter(function (r) {
                  return r.isDeleted == false;
                });
              }
            })["catch"](function (er) {
              var _a, _b;

              _this.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR); // if (er.error.hasError) {
              //   console.log(er.error.message);
              // }

            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this2 = this;

            if (this.productsForm.invalid) {
              this.messageService.alert('Invalid Form make sure you input valid value !', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR);
              this.submitted = true;
              return;
            }

            this.submitted = true;
            this.product = {
              name: this.productsForm.value.name,
              description: this.productsForm.value.description,
              contentHTML: this.productsForm.value.contentHTML,
              imageUrl: this.productsForm.value.imageUrl,
              price: this.productsForm.value.price,
              categoryName: this.categories.filter(function (it) {
                return it.id == _this2.productsForm.value.category;
              })[0].name,
              categoryId: this.productsForm.value.category,
              displayOrder: this.productsForm.value.displayOrder,
              hasDisplayHomePage: this.productsForm.value.hasDisplayHomePage,
              isFeatured: this.productsForm.value.isFeatured,
              id: this.item ? this.item.id : '',
              files: this.modalFile.listFile
            };
            return this.productService.save(this.product).then(function () {
              _this2.messageService.notification(_this2.item ? 'Product has been updated' : 'Product has been created', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].SUCCESS);

              _this2.ngbActiveModal.close();
            })["catch"](function (er) {
              var _a, _b;

              _this2.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR);
            });
          }
        }, {
          key: "loadItem",
          value: function loadItem() {
            this.productsForm = this.formBuilder.group({
              name: [this.item ? this.item.name : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regex)]],
              description: [this.item ? this.item.description : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(300), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.regex)]],
              contentHTML: [this.item ? this.item.contentHTML : ''],
              imageUrl: [this.item ? this.item.imageUrl : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              price: [this.item ? this.item.price : this.item, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]],
              category: [this.item ? this.item.categoryId : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              displayOrder: [this.item ? this.item.displayOrder : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(1000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+')]],
              hasDisplayHomePage: [this.item ? this.item.hasDisplayHomePage : false],
              isFeatured: [this.item ? this.item.isFeatured : false]
            });
            this.modalHeader = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__["ModalHeaderModel"]();
            this.modalHeader.title = this.item ? "Update ".concat(this.item.name) : "Add New Product";
            this.modalFooter = new src_app_shared_components_modals_models_modal_model__WEBPACK_IMPORTED_MODULE_5__["ModalFooterModel"]();
            this.modalFooter.title = 'Save';
          }
        }, {
          key: "close",
          value: function close(event) {
            this.ngbActiveModal.dismiss();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.fetchCategory();
            this.loadItem();

            if (this.item) {
              this.fileURL = [];
              this.item.imageUrl.split(',').forEach(function (it) {
                _this3.fileURL.push(it);
              });
            }
          }
        }, {
          key: "onChangeData",
          value: function onChangeData(event) {
            var _this4 = this;

            if (event == null) {
              return;
            }

            if (!this.fileURL) {
              this.fileURL = [];
            }

            if (event.add) {
              this.fileURL = [].concat(_toConsumableArray(this.fileURL), _toConsumableArray(event.add));
            }

            if (event.remove) {
              this.fileURL.forEach(function (e, i) {
                if (e.includes(event.remove)) {
                  _this4.fileURL.splice(i, 1);
                }
              });
            }

            if (event.removeAll) {
              this.fileURL = [];
            }

            this.productsForm.controls.imageUrl.setValue(this.fileURL.join(','));
          }
        }]);

        return ProductDetailsComponent;
      }();

      ProductDetailsComponent.??fac = function ProductDetailsComponent_Factory(t) {
        return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]));
      };

      ProductDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ProductDetailsComponent,
        selectors: [["app-product-details"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]],
        decls: 77,
        vars: 37,
        consts: [[3, "data", "onAction"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12"], [1, "card", "tab2-card"], [1, "card-body"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "needs-validation", "user-add", 3, "formGroup"], [1, "col-lg-6"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "required", "", "formControlName", "name", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], [1, "invalid-feedback", "col-md-3", "offset-md-3"], ["class", "text-danger", 4, "ngIf"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom1", "type", "text", "required", "", "formControlName", "description", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom5", "type", "number", "required", "", "formControlName", "price", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom7", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom7", "type", "number", "required", "", "formControlName", "displayOrder", 1, "form-control", "col-xl-8", "col-md-7", 3, "ngClass"], ["for", "validationCustom6", 1, "col-xl-3", "col-md-4"], ["formControlName", "category", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback", "col-md-3", "offset-md-0"], ["for", "validationCustom8", 1, "col-xl-7", "col-md-4"], ["id", "validationCustom8", "type", "checkbox", "formControlName", "hasDisplayHomePage", 1, "form-check-input", "col-xl-10", "col-md-6"], ["for", "validationCustom9", 1, "col-xl-7", "col-md-4"], ["id", "validationCustom9", "type", "checkbox", "formControlName", "isFeatured", 1, "form-check-input", "col-xl-10", "col-md-6"], [1, "col-lg-6", "col-md-6", "col-sm-6"], ["id", "validationCustom4", "type", "text", "formControlName", "imageUrl", "required", "", "hidden", "", 1, "form-control", "col-lg-6", "col-md-6", "col-sm-6", 3, "ngClass"], ["styleFile", "width: 350px; height: 300px;", "sizeImage", "650 x 700", 3, "data", "fileURL", "onChange"], ["for", "validationCustom3", 1, "col-xl-6", "col-md-4"], ["id", "validationCustom3", "type", "text", "formControlName", "contentHTML", 1, "col-xl-12", "col-md-12", "p-0", 3, "editor", "config", "ready"], [1, "text-danger"], [3, "value"]],
        template: function ProductDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onAction", function ProductDetailsComponent_Template_app_modal_header_onAction_0_listener($event) {
              return ctx.close($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, ProductDetailsComponent_span_19_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, ProductDetailsComponent_span_20_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, ProductDetailsComponent_span_21_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Product Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, ProductDetailsComponent_span_29_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, ProductDetailsComponent_span_30_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Price");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, ProductDetailsComponent_span_38_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ProductDetailsComponent_span_39_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, ProductDetailsComponent_span_40_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Display Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, ProductDetailsComponent_span_48_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53, " Category Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, ProductDetailsComponent_option_55_Template, 2, 2, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, ProductDetailsComponent_span_57_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Display Home Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " Is Featured");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "app-upload-file", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onChange", function ProductDetailsComponent_Template_app_upload_file_onChange_69_listener($event) {
              return ctx.onChangeData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](71, ProductDetailsComponent_span_71_Template, 2, 0, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, " Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "ckeditor", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ready", function ProductDetailsComponent_Template_ckeditor_ready_75_listener($event) {
              return ctx.onReady($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "app-modal-footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onAction", function ProductDetailsComponent_Template_app_modal_footer_onAction_76_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.productsForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](25, _c0, (ctx.productFormsControl.name.touched || ctx.submitted) && (ctx.productFormsControl.name.errors == null ? null : ctx.productFormsControl.name.errors.required) || ctx.productFormsControl.name.hasError("maxlength") || ctx.productFormsControl.name.hasError("minlength")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.productFormsControl.name.touched || ctx.submitted) && (ctx.productFormsControl.name.errors == null ? null : ctx.productFormsControl.name.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productFormsControl.name.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productFormsControl.name.hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](27, _c0, (ctx.productFormsControl.description.touched || ctx.submitted) && (ctx.productFormsControl.description.errors == null ? null : ctx.productFormsControl.description.errors.required) || ctx.productFormsControl.description.hasError("maxlength")));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.productFormsControl.description.touched || ctx.submitted) && (ctx.productFormsControl.description.errors == null ? null : ctx.productFormsControl.description.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productFormsControl.description.hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](29, _c0, (ctx.productFormsControl.price.touched || ctx.submitted) && (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.required) || (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.max) || (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.min)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.productFormsControl.price.touched || ctx.submitted) && (ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.max);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.productFormsControl.price.errors == null ? null : ctx.productFormsControl.price.errors.min);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](31, _c0, (ctx.productFormsControl.displayOrder.touched || ctx.submitted) && (ctx.productFormsControl.displayOrder.errors == null ? null : ctx.productFormsControl.displayOrder.errors.required)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.productFormsControl.displayOrder.touched || ctx.submitted) && (ctx.productFormsControl.displayOrder.errors == null ? null : ctx.productFormsControl.displayOrder.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](33, _c0, (ctx.productFormsControl.category.touched || ctx.submitted) && (ctx.productFormsControl.category.errors == null ? null : ctx.productFormsControl.category.errors.required)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.productFormsControl.category.touched || ctx.submitted) && (ctx.productFormsControl.category.errors == null ? null : ctx.productFormsControl.category.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](35, _c0, (ctx.productFormsControl.imageUrl.touched || ctx.submitted) && (ctx.productFormsControl.imageUrl.errors == null ? null : ctx.productFormsControl.imageUrl.errors.required)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalFile)("fileURL", ctx.fileURL);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.productFormsControl.imageUrl.touched || ctx.submitted) && (ctx.productFormsControl.imageUrl.errors == null ? null : ctx.productFormsControl.imageUrl.errors.required));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("editor", ctx.editor)("config", ctx.editorConfig);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx.modalFooter);
          }
        },
        directives: [_shared_components_modals_modal_header_modal_header_component__WEBPACK_IMPORTED_MODULE_10__["ModalHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _shared_components_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_12__["UploadFileComponent"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_13__["CKEditorComponent"], _shared_components_modals_modal_footer_modal_footer_component__WEBPACK_IMPORTED_MODULE_14__["ModalFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductDetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss'],
            providers: [src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"], src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]]
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"]
          }, {
            type: src_app_lib_data_services_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]
          }, {
            type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "IqRD":
    /*!********************************************************!*\
      !*** ./src/app/components/products/products.module.ts ***!
      \********************************************************/

    /*! exports provided: ProductModule */

    /***/
    function IqRD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
        return ProductModule;
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


      var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./list-products/list-products.component */
      "rBaE");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./product-details/product-details.component */
      "1+d4");
      /* harmony import */


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./products-routing.module */
      "c9hY");

      var ProductModule = function ProductModule() {
        _classCallCheck(this, ProductModule);
      };

      ProductModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: ProductModule
      });
      ProductModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function ProductModule_Factory(t) {
          return new (t || ProductModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](ProductModule, {
          declarations: [_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__["ListProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](ProductModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_list_products_list_products_component__WEBPACK_IMPORTED_MODULE_7__["ListProductsComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_3__["CKEditorModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "c9hY":
    /*!****************************************************************!*\
      !*** ./src/app/components/products/products-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: ProductRoutingModule */

    /***/
    function c9hY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function () {
        return ProductRoutingModule;
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


      var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-products/list-products.component */
      "rBaE");

      var routes = [{
        path: '',
        children: [{
          path: 'list-products',
          component: _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_2__["ListProductsComponent"],
          data: {
            title: "Product List",
            breadcrumb: "Product List"
          }
        }]
      }];

      var ProductRoutingModule = function ProductRoutingModule() {
        _classCallCheck(this, ProductRoutingModule);
      };

      ProductRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: ProductRoutingModule
      });
      ProductRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        factory: function ProductRoutingModule_Factory(t) {
          return new (t || ProductRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rBaE":
    /*!******************************************************************************!*\
      !*** ./src/app/components/products/list-products/list-products.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ListProductsComponent */

    /***/
    function rBaE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function () {
        return ListProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/lib/data/models */
      "MFsa");
      /* harmony import */


      var src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/lib/data/services/products/product.service */
      "zILp");
      /* harmony import */


      var src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/components/viewimagecell/viewimagecell.component */
      "Ir4Y");
      /* harmony import */


      var src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-number/custom-view-cell-number.component */
      "nL8c");
      /* harmony import */


      var src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/components/customViewCell/customViewCell.component */
      "whnt");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../product-details/product-details.component */
      "1+d4");
      /* harmony import */


      var src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/components/custom-view-cell-string/custom-view-cell-string.component */
      "rh+S");
      /* harmony import */


      var src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/lib/data/services/messages/message.service */
      "e9Dt");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../shared/components/paging-server-view/paging-server-view.component */
      "sirP");

      function ListProductsComponent_app_paging_server_view_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-paging-server-view", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("page", function ListProductsComponent_app_paging_server_view_9_Template_app_paging_server_view_page_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

            return ctx_r1.onPage($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("data", ctx_r0.data);
        }
      }

      var ListProductsComponent = /*#__PURE__*/function () {
        function ListProductsComponent(modalService, productService, messageService) {
          _classCallCheck(this, ListProductsComponent);

          this.modalService = modalService;
          this.productService = productService;
          this.messageService = messageService;
          this.params = {};
          this.closeResult = '';
          this.settings = {
            mode: 'external',
            actions: {
              position: 'right'
            },
            columns: {
              imageUrl: {
                title: 'Image',
                type: 'custom',
                renderComponent: src_app_shared_components_viewimagecell_viewimagecell_component__WEBPACK_IMPORTED_MODULE_4__["ViewImageCellComponent"],
                filter: false
              },
              name: {
                title: 'Name',
                type: 'custom',
                renderComponent: src_app_shared_components_custom_view_cell_string_custom_view_cell_string_component__WEBPACK_IMPORTED_MODULE_8__["CustomViewCellStringComponent"]
              },
              description: {
                title: 'Product Details',
                filter: false
              },
              categoryName: {
                title: 'Category Name',
                filter: false
              },
              isFeatured: {
                title: 'Is Featured',
                filter: false
              },
              price: {
                type: 'custom',
                title: 'Price',
                renderComponent: src_app_shared_components_custom_view_cell_number_custom_view_cell_number_component__WEBPACK_IMPORTED_MODULE_5__["CustomViewCellNumberComponent"],
                filter: false
              },
              displayOrder: {
                title: 'Display Order',
                type: 'custom',
                renderComponent: src_app_shared_components_customViewCell_customViewCell_component__WEBPACK_IMPORTED_MODULE_6__["CustomViewCellComponent"],
                filter: false
              }
            }
          };
          this.params.pageIndex = 0;
          this.fetch();
        }

        _createClass(ListProductsComponent, [{
          key: "delete",
          value: function _delete(event) {
            var _this5 = this;

            var product = event.data;
            this.messageService.confirm('Are you sure to delete this item?', 'Yes').then(function (res) {
              if (res.isConfirmed) {
                _this5.productService["delete"](product).then(function () {
                  _this5.messageService.notification('Delete successful', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].SUCCESS);

                  _this5.fetch();
                })["catch"](function (er) {
                  var _a, _b;

                  return _this5.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR);
                });
              }
            });
          }
        }, {
          key: "openPopup",
          value: function openPopup(item) {
            var _this6 = this;

            var modalRef = this.modalService.open(_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"], {
              size: 'xl'
            });
            modalRef.componentInstance.item = item === null || item === void 0 ? void 0 : item.data;
            return modalRef.result.then(function () {
              _this6.fetch();
            }, function (reason) {
              _this6.closeResult = "Dismissed ".concat(_this6.getDismissReason(reason));
            });
          }
        }, {
          key: "fetch",
          value: function fetch() {
            var _this7 = this;

            this.productService.get({
              params: this.params
            }).then(function (res) {
              if (!res.hasError) {
                _this7.products = res.data.results;
                _this7.data = res.data;
              }
            })["catch"](function (er) {
              var _a, _b;

              _this7.messageService.alert((_b = (_a = er.error.message) !== null && _a !== void 0 ? _a : JSON.stringify(er.error.error)) !== null && _b !== void 0 ? _b : 'Server Disconnected', src_app_lib_data_models__WEBPACK_IMPORTED_MODULE_2__["TypeSweetAlertIcon"].ERROR); // if (er.error.hasError) {
              //   // console.log(er.error.message);
              // }

            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPage",
          value: function onPage(event) {
            this.params.pageIndex = event;
            this.fetch();
          }
        }]);

        return ListProductsComponent;
      }();

      ListProductsComponent.??fac = function ListProductsComponent_Factory(t) {
        return new (t || ListProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]));
      };

      ListProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: ListProductsComponent,
        selectors: [["app-list-products"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])],
        decls: 10,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "vendor-table"], ["id", "batchDelete", 1, "custom-datatable", "media-datatable"], [1, "table-responsive"], [3, "settings", "source", "edit", "create", "delete", "sourceChange"], [3, "data", "page", 4, "ngIf"], [3, "data", "page"]],
        template: function ListProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Product Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ng2-smart-table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("edit", function ListProductsComponent_Template_ng2_smart_table_edit_8_listener($event) {
              return ctx.openPopup($event);
            })("create", function ListProductsComponent_Template_ng2_smart_table_create_8_listener() {
              return ctx.openPopup(null);
            })("delete", function ListProductsComponent_Template_ng2_smart_table_delete_8_listener($event) {
              return ctx["delete"]($event);
            })("sourceChange", function ListProductsComponent_Template_ng2_smart_table_sourceChange_8_listener($event) {
              return ctx.products = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, ListProductsComponent_app_paging_server_view_9_Template, 1, 1, "app-paging-server-view", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("settings", ctx.settings)("source", ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx.data == null ? null : ctx.data.totalPage) > 1);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_10__["Ng2SmartTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_components_paging_server_view_paging_server_view_component__WEBPACK_IMPORTED_MODULE_12__["PagingServerViewComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-products',
            templateUrl: './list-products.component.html',
            styleUrls: ['./list-products.component.scss'],
            providers: [src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]]
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
          }, {
            type: src_app_lib_data_services_products_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
          }, {
            type: src_app_lib_data_services_messages_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-products-products-module-es5.js.map