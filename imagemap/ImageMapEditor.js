import React, { Component } from 'react';
import { Badge, Button, Popconfirm, Menu } from 'antd';
import debounce from 'lodash/debounce';
import i18n from 'i18next';

import ImageMapFooterToolbar from './ImageMapFooterToolbar';
import ImageMapItems from './ImageMapItems';
import ImageMapTitle from './ImageMapTitle';
import ImageMapHeaderToolbar from './ImageMapHeaderToolbar';
import ImageMapPreview from './ImageMapPreview';
import ImageMapConfigurations from './ImageMapConfigurations';
import SandBox from '../sandbox/SandBox';

import '../../libs/fontawesome-5.2.0/css/all.css';
import '../online-design-tool/index.css';
import Container from '../common/Container';
import CommonButton from '../common/CommonButton';
import Canvas from '../canvas/Canvas';
import { code } from '../canvas/constants';
 
var game = "{\"objects\":[{\"type\":\"image\",\"version\":\"3.6.3\",\"originX\":\"left\",\"originY\":\"top\",\"left\":92.5,\"top\":47.15,\"width\":600,\"height\":400,\"fill\":\"rgb(0,0,0)\",\"stroke\":null,\"strokeWidth\":0,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"#fff\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"crossOrigin\":\"\",\"cropX\":0,\"cropY\":0,\"id\":\"workarea\",\"name\":\"\",\"link\":{},\"tooltip\":{\"enabled\":false},\"layout\":\"fixed\",\"workareaWidth\":600,\"workareaHeight\":400,\"src\":\"\",\"filters\":[]},{\"type\":\"svg\",\"version\":\"3.6.3\",\"originX\":\"left\",\"originY\":\"top\",\"left\":311.41,\"top\":181.9,\"width\":512,\"height\":512,\"fill\":\"rgba(0, 0, 0, 1)\",\"stroke\":\"rgba(182,122,122,0)\",\"strokeWidth\":0,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":0.32,\"scaleY\":0.32,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"objects\":[{\"type\":\"path\",\"version\":\"3.6.3\",\"originX\":\"left\",\"originY\":\"top\",\"left\":-256.5,\"top\":-87.74,\"width\":510.51,\"height\":318,\"fill\":\"rgb(0,0,0)\",\"stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"path\":[[\"m\",508.934,374.044],[\"l\",-21.002,-114.24],[\"c\",-6.75,-52.217,-51.437,-91.535,-104.128,-91.535],[\"h\",-257.1],[\"c\",-52.691,0,-97.377,39.318,-104.128,91.536],[\"l\",-21.002,114.239],[\"c\",-10.442,56.8,32.377,109.844,89.812,112.149],[\"c\",54.727,2.191,98.696,-42.488,98.868,-95.801],[\"c\",0.002,-0.19,-6.175,-0.124,130.001,-0.124],[\"c\",0,53.13,43.973,98.129,98.868,95.925],[\"c\",57.175,-2.295,100.305,-55.077,89.811,-112.149],[\"z\"],[\"m\",-325.68,-71.775],[\"h\",-25],[\"v\",25],[\"c\",0,8.284,-6.716,15,-15,15],[\"s\",-15,-6.716,-15,-15],[\"v\",-25],[\"h\",-25],[\"c\",-8.284,0,-15,-6.716,-15,-15],[\"s\",6.716,-15,15,-15],[\"h\",25],[\"v\",-25],[\"c\",0,-8.284,6.716,-15,15,-15],[\"s\",15,6.716,15,15],[\"v\",25],[\"h\",25],[\"c\",8.284,0,15,6.716,15,15],[\"s\",-6.716,15,-15,15],[\"z\"],[\"m\",159,-14],[\"c\",0,8.284,-6.716,15,-15,15],[\"s\",-15,-6.716,-15,-15],[\"v\",-1],[\"c\",0,-8.284,6.716,-15,15,-15],[\"s\",15,6.716,15,15],[\"z\"],[\"m\",39.93,40.48],[\"c\",-0.816,7.863,-7.596,14.17,-16.41,13.45],[\"c\",-8.393,-0.876,-14.286,-8.343,-13.45,-16.4],[\"c\",0.895,-8.633,8.834,-14.936,17.86,-13.24],[\"c\",7.967,1.656,12.74,8.911,12,16.19],[\"z\"],[\"m\",0,-80.01],[\"c\",-0.86,8.461,-8.404,14.277,-16.41,13.46],[\"c\",-8.412,-0.878,-14.269,-8.35,-13.45,-16.41],[\"c\",0.917,-8.667,8.867,-14.92,17.86,-13.23],[\"c\",7.988,1.66,12.75,8.952,12,16.18],[\"z\"],[\"m\",40.07,39.53],[\"c\",0,8.284,-6.716,15,-15,15],[\"s\",-15,-6.716,-15,-15],[\"v\",-1],[\"c\",0,-8.284,6.716,-15,15,-15],[\"s\",15,6.716,15,15],[\"z\"]]},{\"type\":\"path\",\"version\":\"3.6.3\",\"originX\":\"left\",\"originY\":\"top\",\"left\":-43.91,\"top\":-167.95,\"width\":86.57,\"height\":41.69,\"fill\":\"rgb(0,0,0)\",\"stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"path\":[[\"m\",216.363,104.378],[\"c\",-5.858,5.858,-5.858,15.355,0,21.213],[\"c\",5.857,5.857,15.355,5.857,21.213,0],[\"c\",9.77,-9.77,25.584,-9.772,35.355,0],[\"c\",5.858,5.858,15.355,5.858,21.213,0],[\"s\",5.858,-15.355,0,-21.213],[\"c\",-21.443,-21.445,-56.336,-21.444,-77.781,0],[\"z\"]]},{\"type\":\"path\",\"version\":\"3.6.3\",\"originX\":\"left\",\"originY\":\"top\",\"left\":-89.3,\"top\":-232.19,\"width\":177.08,\"height\":60.49,\"fill\":\"rgb(0,0,0)\",\"stroke\":null,\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":1,\"scaleY\":1,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"path\":[[\"m\",192.321,80.336],[\"c\",34.781,-34.781,91.08,-34.787,125.865,0],[\"c\",5.857,5.858,15.355,5.858,21.213,0],[\"s\",5.858,-15.355,0,-21.213],[\"c\",-46.504,-46.505,-121.78,-46.511,-168.291,0],[\"c\",-5.858,5.858,-5.858,15.355,0,21.213],[\"s\",15.356,5.858,21.213,0],[\"z\"]]}],\"svg\":\"data:image\/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTAuNTEzIDUxMC41MTMiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEwLjUxMyA1MTAuNTEzIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxwYXRoIGQ9Im01MDguOTM0IDM3NC4wNDQtMjEuMDAyLTExNC4yNGMtNi43NS01Mi4yMTctNTEuNDM3LTkxLjUzNS0xMDQuMTI4LTkxLjUzNWgtMjU3LjFjLTUyLjY5MSAwLTk3LjM3NyAzOS4zMTgtMTA0LjEyOCA5MS41MzZsLTIxLjAwMiAxMTQuMjM5Yy0xMC40NDIgNTYuOCAzMi4zNzcgMTA5Ljg0NCA4OS44MTIgMTEyLjE0OSA1NC43MjcgMi4xOTEgOTguNjk2LTQyLjQ4OCA5OC44NjgtOTUuODAxLjAwMi0uMTktNi4xNzUtLjEyNCAxMzAuMDAxLS4xMjQgMCA1My4xMyA0My45NzMgOTguMTI5IDk4Ljg2OCA5NS45MjUgNTcuMTc1LTIuMjk1IDEwMC4zMDUtNTUuMDc3IDg5LjgxMS0xMTIuMTQ5em0tMzI1LjY4LTcxLjc3NWgtMjV2MjVjMCA4LjI4NC02LjcxNiAxNS0xNSAxNXMtMTUtNi43MTYtMTUtMTV2LTI1aC0yNWMtOC4yODQgMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSAxNS0xNWgyNXYtMjVjMC04LjI4NCA2LjcxNi0xNSAxNS0xNXMxNSA2LjcxNiAxNSAxNXYyNWgyNWM4LjI4NCAwIDE1IDYuNzE2IDE1IDE1cy02LjcxNiAxNS0xNSAxNXptMTU5LTE0YzAgOC4yODQtNi43MTYgMTUtMTUgMTVzLTE1LTYuNzE2LTE1LTE1di0xYzAtOC4yODQgNi43MTYtMTUgMTUtMTVzMTUgNi43MTYgMTUgMTV6bTM5LjkzIDQwLjQ4Yy0uODE2IDcuODYzLTcuNTk2IDE0LjE3LTE2LjQxIDEzLjQ1LTguMzkzLS44NzYtMTQuMjg2LTguMzQzLTEzLjQ1LTE2LjQuODk1LTguNjMzIDguODM0LTE0LjkzNiAxNy44Ni0xMy4yNCA3Ljk2NyAxLjY1NiAxMi43NCA4LjkxMSAxMiAxNi4xOXptMC04MC4wMWMtLjg2IDguNDYxLTguNDA0IDE0LjI3Ny0xNi40MSAxMy40Ni04LjQxMi0uODc4LTE0LjI2OS04LjM1LTEzLjQ1LTE2LjQxLjkxNy04LjY2NyA4Ljg2Ny0xNC45MiAxNy44Ni0xMy4yMyA3Ljk4OCAxLjY2IDEyLjc1IDguOTUyIDEyIDE2LjE4em00MC4wNyAzOS41M2MwIDguMjg0LTYuNzE2IDE1LTE1IDE1cy0xNS02LjcxNi0xNS0xNXYtMWMwLTguMjg0IDYuNzE2LTE1IDE1LTE1czE1IDYuNzE2IDE1IDE1eiIvPjxwYXRoIGQ9Im0yMTYuMzYzIDEwNC4zNzhjLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxMyA1Ljg1NyA1Ljg1NyAxNS4zNTUgNS44NTcgMjEuMjEzIDAgOS43Ny05Ljc3IDI1LjU4NC05Ljc3MiAzNS4zNTUgMCA1Ljg1OCA1Ljg1OCAxNS4zNTUgNS44NTggMjEuMjEzIDBzNS44NTgtMTUuMzU1IDAtMjEuMjEzYy0yMS40NDMtMjEuNDQ1LTU2LjMzNi0yMS40NDQtNzcuNzgxIDB6Ii8+PHBhdGggZD0ibTE5Mi4zMjEgODAuMzM2YzM0Ljc4MS0zNC43ODEgOTEuMDgtMzQuNzg3IDEyNS44NjUgMCA1Ljg1NyA1Ljg1OCAxNS4zNTUgNS44NTggMjEuMjEzIDBzNS44NTgtMTUuMzU1IDAtMjEuMjEzYy00Ni41MDQtNDYuNTA1LTEyMS43OC00Ni41MTEtMTY4LjI5MSAwLTUuODU4IDUuODU4LTUuODU4IDE1LjM1NSAwIDIxLjIxM3MxNS4zNTYgNS44NTggMjEuMjEzIDB6Ii8+PC9nPjwvc3ZnPg==\",\"loadType\":\"file\",\"id\":\"0fb83018-4c89-4cf4-acf1-e8f383d538e4\",\"name\":\"New SVG\",\"link\":{\"enabled\":false,\"type\":\"resource\",\"state\":\"new\",\"dashboard\":{}},\"tooltip\":{\"enabled\":true,\"type\":\"resource\",\"template\":\"<div>{{message.name}}<\/div>\"},\"animation\":{\"type\":\"none\",\"loop\":true,\"autoplay\":true,\"duration\":1000},\"userProperty\":{},\"trigger\":{\"enabled\":false,\"type\":\"alarm\",\"script\":\"return message.value > 0;\",\"effect\":\"style\"},\"superType\":\"svg\",\"editable\":true},{\"type\":\"textbox\",\"version\":\"3.6.3\",\"originX\":\"left\",\"originY\":\"top\",\"left\":179.5,\"top\":75.17,\"width\":191.35,\"height\":28.25,\"fill\":\"rgba(0, 0, 0, 1)\",\"stroke\":\"rgba(255, 255, 255, 0)\",\"strokeWidth\":1,\"strokeDashArray\":null,\"strokeLineCap\":\"butt\",\"strokeDashOffset\":0,\"strokeLineJoin\":\"miter\",\"strokeMiterLimit\":4,\"scaleX\":2.22,\"scaleY\":2.12,\"angle\":0,\"flipX\":false,\"flipY\":false,\"opacity\":1,\"shadow\":null,\"visible\":true,\"clipTo\":null,\"backgroundColor\":\"\",\"fillRule\":\"nonzero\",\"paintFirst\":\"fill\",\"globalCompositeOperation\":\"source-over\",\"transformMatrix\":null,\"skewX\":0,\"skewY\":0,\"text\":\"Best Games\",\"fontSize\":\"25\",\"fontWeight\":\"bold\",\"fontFamily\":\"Roboto\",\"fontStyle\":\"italic\",\"lineHeight\":49,\"underline\":true,\"overline\":false,\"linethrough\":true,\"textAlign\":\"justify\",\"textBackgroundColor\":\"\",\"charSpacing\":24,\"minWidth\":20,\"splitByGrapheme\":false,\"id\":\"5508bf79-aee4-4733-9073-5ae6528a80b3\",\"name\":\"New text\",\"locked\":false,\"link\":{\"enabled\":false,\"type\":\"resource\",\"state\":\"new\",\"dashboard\":{}},\"tooltip\":{\"enabled\":true,\"type\":\"resource\",\"template\":\"<div>{{message.name}}<\/div>\"},\"animation\":{\"type\":\"none\",\"loop\":true,\"autoplay\":true,\"duration\":1000},\"userProperty\":{\"sdfsfsdfsf\":\"dgdgdgdg\"},\"trigger\":{\"enabled\":true,\"type\":\"alarm\",\"script\":\"return message.value > 0;\",\"effect\":\"style\",\"code\":\"return null;\"},\"editable\":true,\"styles\":{}}],\"animations\":[],\"styles\":[],\"dataSources\":[]}";

const propertiesToInclude = [
	'id',
	'name',
	'locked',
	'file',
	'src',
	'link',
	'tooltip',
	'animation',
	'layout',
	'workareaWidth',
	'workareaHeight',
	'videoLoadType',
	'autoplay',
	'shadow',
	'muted',
	'loop',
	'code',
	'icon',
	'userProperty',
	'trigger',
	'configuration',
	'superType',
	'points',
	'svg',
	'loadType',
];

const defaultOption = {
	fill: 'rgba(0, 0, 0, 1)',
	stroke: 'rgba(255, 255, 255, 0)',
	strokeUniform: true,
	resource: {},
	link: {
		enabled: false,
		type: 'resource',
		state: 'new',
		dashboard: {},
	},
	tooltip: {
		enabled: true,
		type: 'resource',
		template: '<div>{{message.name}}</div>',
	},
	animation: {
		type: 'none',
		loop: true,
		autoplay: true,
		duration: 1000,
	},
	userProperty: {},
	trigger: {
		enabled: false,
		type: 'alarm',
		script: 'return message.value > 0;',
		effect: 'style',
	},
};

class ImageMapEditor extends Component {
  state = {
    selectedItem: null,
    zoomRatio: 1,
    preview: false,
    loading: false,
    progress: 0,
    animations: [],
    styles: [],
    dataSources: [],
    editing: false,
    descriptors: {},
    objects: undefined,
    productJSON: this.props.productJSON,
    productProductionTime:
	this.props.productAndQuoteDetails.productDetails.productProductionTime *
	this.props.productAndQuoteDetails.instantQuoteVals.quantity,
    quantity: this.props.productAndQuoteDetails.instantQuoteVals.quantity,
    size: this.props.productAndQuoteDetails.instantQuoteVals.size,
    lamination: this.props.productAndQuoteDetails.instantQuoteVals.lamination,
    prinitng: this.props.productAndQuoteDetails.instantQuoteVals.printedSides,
    eyeletQL: this.props.productAndQuoteDetails.instantQuoteVals.eyeletQL,
    deliveryMethod: this.props.productAndQuoteDetails.instantQuoteVals.delivery,
    totalCharges: this.props.productAndQuoteDetails.productDetails.productPrice.toFixed(
      2
    ),
    totalDeliveryCharges:
	this.props.productAndQuoteDetails.instantQuoteVals.delivery == "D"
        ? (
            this.props.productAndQuoteDetails.productDetails.productPrice *
            this.props.productAndQuoteDetails.instantQuoteVals.quantity *
            0.1
          ).toFixed(2)
        : (0).toFixed(2),
  };

  componentDidMount() {
    this.showLoading(true);
    console.log("Hello I am here");
    import("./Descriptors.json").then((descriptors) => {
      this.setState(
        {
          descriptors,
        },
        () => {}
      );
    });
    this.setState({
      selectedItem: null,
    });
    this.shortcutHandlers.esc();
    this.canvasRef.handler.importJSON(this.state.productJSON);
    this.showLoading(false);
  }

  canvasHandlers = {
    onAdd: (target) => {
      const { editing } = this.state;
      this.forceUpdate();
      if (!editing) {
        this.changeEditing(true);
      }
      if (target.type === "activeSelection") {
        this.canvasHandlers.onSelect(null);
        return;
      }
      this.canvasRef.handler.select(target);
    },
    onSelect: (target) => {
      const { selectedItem } = this.state;
      if (
        target &&
        target.id &&
        target.id !== "workarea" &&
        target.type !== "activeSelection"
      ) {
        if (selectedItem && target.id === selectedItem.id) {
          return;
        }
        this.canvasRef.handler.getObjects().forEach((obj) => {
          if (obj) {
            this.canvasRef.handler.animationHandler.resetAnimation(obj, true);
          }
        });
        this.setState({
          selectedItem: target,
        });
        return;
      }
      this.canvasRef.handler.getObjects().forEach((obj) => {
        if (obj) {
          this.canvasRef.handler.animationHandler.resetAnimation(obj, true);
        }
      });
      this.setState({
        selectedItem: null,
      });
    },
    onRemove: () => {
      const { editing } = this.state;
      if (!editing) {
        this.changeEditing(true);
      }
      this.canvasHandlers.onSelect(null);
    },
    onModified: debounce(() => {
      const { editing } = this.state;
      this.forceUpdate();
      if (!editing) {
        this.changeEditing(true);
      }
    }, 300),
    onZoom: (zoom) => {
      this.setState({
        zoomRatio: zoom,
      });
    },
    onChange: (selectedItem, changedValues, allValues) => {
      const { editing } = this.state;
      if (!editing) {
        this.changeEditing(true);
      }
      const changedKey = Object.keys(changedValues)[0];
      const changedValue = changedValues[changedKey];
      if (allValues.workarea) {
        this.canvasHandlers.onChangeWokarea(
          changedKey,
          changedValue,
          allValues.workarea
        );
        return;
      }
      if (changedKey === "width" || changedKey === "height") {
        this.canvasRef.handler.scaleToResize(allValues.width, allValues.height);
        return;
      }
      if (changedKey === "angle") {
        this.canvasRef.handler.rotate(allValues.angle);
        return;
      }
      if (changedKey === "locked") {
        this.canvasRef.handler.setObject({
          lockMovementX: changedValue,
          lockMovementY: changedValue,
          hasControls: !changedValue,
          hoverCursor: changedValue ? "pointer" : "move",
          editable: !changedValue,
          locked: changedValue,
        });
        return;
      }
      if (
        changedKey === "file" ||
        changedKey === "src" ||
        changedKey === "code"
      ) {
        if (selectedItem.type === "image") {
          this.canvasRef.handler.setImageById(selectedItem.id, changedValue);
        } else if (selectedItem.superType === "element") {
          this.canvasRef.handler.elementHandler.setById(
            selectedItem.id,
            changedValue
          );
        }
        return;
      }
      if (changedKey === "link") {
        const link = Object.assign({}, defaultOption.link, allValues.link);
        this.canvasRef.handler.set(changedKey, link);
        return;
      }
      if (changedKey === "tooltip") {
        const tooltip = Object.assign(
          {},
          defaultOption.tooltip,
          allValues.tooltip
        );
        this.canvasRef.handler.set(changedKey, tooltip);
        return;
      }
      if (changedKey === "animation") {
        const animation = Object.assign(
          {},
          defaultOption.animation,
          allValues.animation
        );
        this.canvasRef.handler.set(changedKey, animation);
        return;
      }
      if (changedKey === "icon") {
        const { unicode, styles } = changedValue[Object.keys(changedValue)[0]];
        const uni = parseInt(unicode, 16);
        if (styles[0] === "brands") {
          this.canvasRef.handler.set("fontFamily", "Font Awesome 5 Brands");
        } else if (styles[0] === "regular") {
          this.canvasRef.handler.set("fontFamily", "Font Awesome 5 Regular");
        } else {
          this.canvasRef.handler.set("fontFamily", "Font Awesome 5 Free");
        }
        this.canvasRef.handler.set("text", String.fromCodePoint(uni));
        this.canvasRef.handler.set("icon", changedValue);
        return;
      }
      if (changedKey === "shadow") {
        if (allValues.shadow.enabled) {
          if ("blur" in allValues.shadow) {
            this.canvasRef.handler.setShadow(allValues.shadow);
          } else {
            this.canvasRef.handler.setShadow({
              enabled: true,
              blur: 15,
              offsetX: 10,
              offsetY: 10,
            });
          }
        } else {
          this.canvasRef.handler.setShadow(null);
        }
        return;
      }
      if (changedKey === "fontWeight") {
        this.canvasRef.handler.set(
          changedKey,
          changedValue ? "bold" : "normal"
        );
        return;
      }
      if (changedKey === "fontStyle") {
        this.canvasRef.handler.set(
          changedKey,
          changedValue ? "italic" : "normal"
        );
        return;
      }
      if (changedKey === "textAlign") {
        this.canvasRef.handler.set(changedKey, Object.keys(changedValue)[0]);
        return;
      }
      if (changedKey === "trigger") {
        const trigger = Object.assign(
          {},
          defaultOption.trigger,
          allValues.trigger
        );
        this.canvasRef.handler.set(changedKey, trigger);
        return;
      }
      if (changedKey === "filters") {
        const filterKey = Object.keys(changedValue)[0];
        const filterValue = allValues.filters[filterKey];
        if (filterKey === "gamma") {
          const rgb = [filterValue.r, filterValue.g, filterValue.b];
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              gamma: rgb,
            }
          );
          return;
        }
        if (filterKey === "brightness") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              brightness: filterValue.brightness,
            }
          );
          return;
        }
        if (filterKey === "contrast") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              contrast: filterValue.contrast,
            }
          );
          return;
        }
        if (filterKey === "saturation") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              saturation: filterValue.saturation,
            }
          );
          return;
        }
        if (filterKey === "hue") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              rotation: filterValue.rotation,
            }
          );
          return;
        }
        if (filterKey === "noise") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              noise: filterValue.noise,
            }
          );
          return;
        }
        if (filterKey === "pixelate") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              blocksize: filterValue.blocksize,
            }
          );
          return;
        }
        if (filterKey === "blur") {
          this.canvasRef.handler.imageHandler.applyFilterByType(
            filterKey,
            changedValue[filterKey].enabled,
            {
              value: filterValue.value,
            }
          );
          return;
        }
        this.canvasRef.handler.imageHandler.applyFilterByType(
          filterKey,
          changedValue[filterKey]
        );
        return;
      }
      if (changedKey === "chartOption") {
        try {
          const sandbox = new SandBox();
          const compiled = sandbox.compile(changedValue);
          const { animations, styles } = this.state;
          const chartOption = compiled(
            3,
            animations,
            styles,
            selectedItem.userProperty
          );
          selectedItem.setChartOptionStr(changedValue);
          this.canvasRef.handler.elementHandler.setById(
            selectedItem.id,
            chartOption
          );
        } catch (error) {
          console.error(error);
        }
        return;
      }
      this.canvasRef.handler.set(changedKey, changedValue);
    },
    onChangeWokarea: (changedKey, changedValue, allValues) => {
      if (changedKey === "layout") {
        this.canvasRef.handler.workareaHandler.setLayout(changedValue);
        return;
      }
      if (changedKey === "file" || changedKey === "src") {
        this.canvasRef.handler.workareaHandler.setImage(changedValue);
        return;
      }
      if (changedKey === "width" || changedKey === "height") {
        this.canvasRef.handler.originScaleToResize(
          this.canvasRef.handler.workarea,
          allValues.width,
          allValues.height
        );
        this.canvasRef.canvas.centerObject(this.canvasRef.handler.workarea);
        return;
      }
      this.canvasRef.handler.workarea.set(changedKey, changedValue);
      this.canvasRef.canvas.requestRenderAll();
    },
    onTooltip: (ref, target) => {
      const value = Math.random() * 10 + 1;
      const { animations, styles } = this.state;
      // const { code } = target.trigger;
      // const compile = SandBox.compile(code);
      // const result = compile(value, animations, styles, target.userProperty);
      // console.log(result);
      return (
        <div>
          <div>
            <div>
              <Button>{target.id}</Button>
            </div>
            <Badge count={value} />
          </div>
        </div>
      );
    },
    onClick: (canvas, target) => {
      const { link } = target;
      if (link.state === "current") {
        document.location.href = link.url;
        return;
      }
      window.open(link.url);
    },
    onContext: (ref, event, target) => {
      if ((target && target.id === "workarea") || !target) {
        const { layerX: left, layerY: top } = event;
        return (
          <Menu>
            <Menu.SubMenu
              key="add"
              style={{ width: 120 }}
              title={i18n.t("action.add")}
            >
              {this.transformList().map((item) => {
                const option = Object.assign({}, item.option, { left, top });
                const newItem = Object.assign({}, item, { option });
                return (
                  <Menu.Item style={{ padding: 0 }} key={item.name}>
                    {this.itemsRef.renderItem(newItem, false)}
                  </Menu.Item>
                );
              })}
            </Menu.SubMenu>
          </Menu>
        );
      }
      if (target.type === "activeSelection") {
        return (
          <Menu>
            <Menu.Item
              onClick={() => {
                this.canvasRef.handler.toGroup();
              }}
            >
              Group
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                this.canvasRef.handler.duplicate();
              }}
            >
              Clone
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                this.canvasRef.handler.remove();
              }}
            >
              Delete
            </Menu.Item>
          </Menu>
        );
      }
      if (target.type === "group") {
        return (
          <Menu>
            <Menu.Item
              onClick={() => {
                this.canvasRef.handler.toActiveSelection();
              }}
            >
              Ungroup
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                this.canvasRef.handler.duplicate();
              }}
            >
              Clone
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                this.canvasRef.handler.remove();
              }}
            >
              Delete
            </Menu.Item>
          </Menu>
        );
      }
      return (
        <Menu>
          <Menu.Item
            onClick={() => {
              this.canvasRef.handler.duplicateById(target.id);
            }}
          >
            Clone
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              this.canvasRef.handler.removeById(target.id);
            }}
          >
            Delete
          </Menu.Item>
        </Menu>
      );
    },
    onTransaction: (transaction) => {
      this.forceUpdate();
    },
  };

  handlers = {
    onChangePreview: (checked) => {
      let data;
      if (this.canvasRef) {
        data = this.canvasRef.handler.exportJSON().filter((obj) => {
          if (!obj.id) {
            return false;
          }
          return true;
        });
      }
      this.setState({
        preview: typeof checked === "object" ? false : checked,
        objects: data,
      });
    },
    onProgress: (progress) => {
      this.setState({
        progress,
      });
    },
    onImport: (files) => {
      if (files) {
        this.showLoading(true);
        setTimeout(() => {
          const reader = new FileReader();
          reader.onprogress = (e) => {
            if (e.lengthComputable) {
              const progress = parseInt((e.loaded / e.total) * 100, 10);
              this.handlers.onProgress(progress);
            }
          };
          reader.onload = (e) => {
            const { objects, animations, styles, dataSources } = JSON.parse(
              e.target.result
            );
            this.setState({
              animations,
              styles,
              dataSources,
            });
            if (objects) {
              this.canvasRef.handler.clear(true);
              const data = objects.filter((obj) => {
                if (!obj.id) {
                  return false;
                }
                return true;
              });
              this.canvasRef.handler.importJSON(data);
            }
          };
          reader.onloadend = () => {
            this.showLoading(false);
          };
          reader.onerror = () => {
            this.showLoading(false);
          };
          reader.readAsText(files[0]);
        }, 500);
      }
    },
    onUpload: () => {
      const inputEl = document.createElement("input");
      inputEl.accept = ".json";
      inputEl.type = "file";
      inputEl.hidden = true;
      inputEl.onchange = (e) => {
        this.handlers.onImport(e.target.files);
      };
      document.body.appendChild(inputEl); // required for firefox
      inputEl.click();
      inputEl.remove();
    },
    onDownload: () => {
      this.showLoading(true);
      const objects = this.canvasRef.handler.exportJSON().filter((obj) => {
        if (!obj.id) {
          return false;
        }
        return true;
      });
      const { animations, styles, dataSources } = this.state;
      const exportDatas = {
        objects,
        animations,
        styles,
        dataSources,
      };
      //   const dataUrl = this.canvasRef.canvas.toDataURL({ name: 'New Image', format: 'png', quality: 1 });
      const dataURL = this.canvasRef.canvas.toDataURL({
        name: "New Image",
        format: "png",
        quality: 100,
      });
      const imgFile = this.dataURLtoFile(
        dataURL,
        this.props.productAndQuoteDetails.productDetails.productTitle
      );
      if (imgFile) {
        var formdata = new FormData();
        formdata.append("file", imgFile);

        var requestOptions = {
          method: "POST",
          body: formdata,
        };

        fetch("https://codexiatech.dev/auctionStore/upload.php", requestOptions)
          .then((response) => response.text())
          .then((data) => {
            let productImageURL = JSON.parse(data).fileUrl;
            if (localStorage.getItem("cart")) {
              var cart = JSON.parse(localStorage.getItem("cart"));
              var orderDetails = {
                orderNo: cart.length + 1,
                productProductionTime: this.state.productProductionTime,
                quantity: this.state.quantity,
                size: this.state.size,
                lamination: this.state.lamination,
                prinitng: this.state.prinitng,
                eyeletQL: this.state.eyeletQL,
                totalCharges: this.state.totalCharges,
                totalDeliveryCharges: this.state.totalDeliveryCharges,
                deliveryMethod: this.state.deliveryMethod,
                productDetails: this.props.productAndQuoteDetails.productDetails,
                productImageURL: productImageURL,
                productJSON: JSON.stringify(objects),
              };

              cart.push(orderDetails);
              localStorage.setItem("cart", JSON.stringify(cart));
            } else {
              var myCart = new Array();
              var firstOrderDetails = {
                orderNo: 1,
                productProductionTime: this.state.productProductionTime,
                quantity: this.state.quantity,
                size: this.state.size,
                lamination: this.state.lamination,
                prinitng: this.state.prinitng,
                eyeletQL: this.state.eyeletQL,
                totalCharges: this.state.totalCharges,
                totalDeliveryCharges: this.state.totalDeliveryCharges,
                deliveryMethod: this.state.deliveryMethod,
                productDetails: this.props.productAndQuoteDetails.productDetails,
                productImageURL: productImageURL,
                productJSON: JSON.stringify(objects),
              };

              myCart.push(firstOrderDetails);
              localStorage.setItem("cart", JSON.stringify(myCart));
            }

            this.props.history.push({
              pathname: "/checkout",
              state: { productAndQuoteDetails: this.props.productAndQuoteDetails },
            });
          });
      }
    },
    onChangeAnimations: (animations) => {
      if (!this.state.editing) {
        this.changeEditing(true);
      }
      this.setState({
        animations,
      });
    },
    onChangeStyles: (styles) => {
      if (!this.state.editing) {
        this.changeEditing(true);
      }
      this.setState({
        styles,
      });
    },
    onChangeDataSources: (dataSources) => {
      if (!this.state.editing) {
        this.changeEditing(true);
      }
      this.setState({
        dataSources,
      });
    },
    onSaveImage: () => {
      this.canvasRef.handler.saveCanvasImage();
    },
  };

  shortcutHandlers = {
    esc: () => {
      document.addEventListener("keydown", (e) => {
        if (e.code === code.ESCAPE) {
          this.handlers.onChangePreview(false);
        }
      });
    },
  };

  transformList = () => {
    return Object.values(this.state.descriptors).reduce(
      (prev, curr) => prev.concat(curr),
      []
    );
  };

  showLoading = (loading) => {
    this.setState({
      loading,
    });
  };

  changeEditing = (editing) => {
    this.setState({
      editing,
    });
  };

  dataURLtoFile = (dataurl, filename) => {
	var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
		bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
		while(n--){
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {type:mime});
	}

  render() {
    const {
      preview,
      selectedItem,
      zoomRatio,
      loading,
      progress,
      animations,
      styles,
      dataSources,
      editing,
      descriptors,
      objects,
    } = this.state;
    const {
      onAdd,
      onRemove,
      onSelect,
      onModified,
      onChange,
      onZoom,
      onTooltip,
      onClick,
      onContext,
      onTransaction,
    } = this.canvasHandlers;
    const {
      onChangePreview,
      onDownload,
      onUpload,
      onChangeAnimations,
      onChangeStyles,
      onChangeDataSources,
      onSaveImage,
    } = this.handlers;
    const action = (
      <React.Fragment>
        <CommonButton
          className="rde-action-btn"
          shape="circle"
          icon="image"
          style={{ fontSize: 22, background: "peachpuff", outline: "auto" }}
          // disabled={!editing}
          tooltipTitle="Order Now"
          onClick={onDownload}
          tooltipPlacement="bottomRight"
        />
        {/* {editing ? (
					<Popconfirm
						title={i18n.t('imagemap.imagemap-editing-confirm')}
						okText={i18n.t('action.ok')}
						cancelText={i18n.t('action.cancel')}
						onConfirm={onUpload}
						placement="bottomRight"
					>
						<CommonButton
							className="rde-action-btn"
							shape="circle"
							icon="file-upload"
							tooltipTitle={i18n.t('action.upload')}
							tooltipPlacement="bottomRight"
						/>
					</Popconfirm>
				) : (
					<CommonButton
						className="rde-action-btn"
						shape="circle"
						icon="file-upload"
						tooltipTitle={i18n.t('action.upload')}
						tooltipPlacement="bottomRight"
						onClick={onUpload}
					/>
				)}
				<CommonButton
					className="rde-action-btn"
					shape="circle"
					icon="image"
					tooltipTitle={i18n.t('action.image-save')}
					onClick={onSaveImage}
					tooltipPlacement="bottomRight"
				/> */}
      </React.Fragment>
    );
    const titleContent = (
      <React.Fragment>
        <span>{i18n.t("imagemap.imagemap-editor")}</span>
      </React.Fragment>
    );
    const title = <ImageMapTitle title={titleContent} action={action} />;
    const content = (
      <div className="rde-editor">
        <ImageMapItems
          ref={(c) => {
            this.itemsRef = c;
          }}
          canvasRef={this.canvasRef}
          descriptors={descriptors}
        />
        <div className="rde-editor-canvas-container">
          <div className="rde-editor-header-toolbar">
            <ImageMapHeaderToolbar
              canvasRef={this.canvasRef}
              selectedItem={selectedItem}
              onSelect={onSelect}
            />
          </div>
          <div
            ref={(c) => {
              this.container = c;
            }}
            className="rde-editor-canvas"
          >
            <Canvas
              ref={(c) => {
                this.canvasRef = c;
              }}
              className="rde-canvas"
              minZoom={30}
              maxZoom={500}
              objectOption={defaultOption}
              propertiesToInclude={propertiesToInclude}
              onModified={onModified}
              onAdd={onAdd}
              onRemove={onRemove}
              onSelect={onSelect}
              onZoom={onZoom}
              onTooltip={onTooltip}
              onClick={onClick}
              onContext={onContext}
              onTransaction={onTransaction}
              keyEvent={{
                transaction: true,
              }}
            />
          </div>
          <div className="rde-editor-footer-toolbar">
            <ImageMapFooterToolbar
              canvasRef={this.canvasRef}
              preview={preview}
              onChangePreview={onChangePreview}
              zoomRatio={zoomRatio}
            />
          </div>
        </div>
        <ImageMapConfigurations
          canvasRef={this.canvasRef}
          onChange={onChange}
          selectedItem={selectedItem}
          onChangeAnimations={onChangeAnimations}
          onChangeStyles={onChangeStyles}
          onChangeDataSources={onChangeDataSources}
          animations={animations}
          styles={styles}
          dataSources={dataSources}
        />
        <ImageMapPreview
          preview={preview}
          onChangePreview={onChangePreview}
          onTooltip={onTooltip}
          onClick={onClick}
          objects={objects}
        />
      </div>
    );
    return (
      <Container
        title={title}
        content={content}
        loading={loading}
        className=""
      />
    );
  }
}

export default ImageMapEditor;
