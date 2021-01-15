function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var fabric = require('fabric');
var diff = _interopDefault(require('deep-diff'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function collectionMixin(delgete) {
  delgete.add = function () {
    var _delgete$state$canvas;

    return delgete.state.canvas && (_delgete$state$canvas = delgete.state.canvas).add.apply(_delgete$state$canvas, arguments);
  };

  delgete.insertAt = function (object, index, nonSplicing) {
    return delgete.state.canvas && delgete.state.canvas.insertAt(object, index, nonSplicing);
  };

  delgete.remove = function () {
    var _delgete$state$canvas2;

    return delgete.state.canvas && (_delgete$state$canvas2 = delgete.state.canvas).remove.apply(_delgete$state$canvas2, arguments);
  };

  delgete.forEachObject = function (callback, context) {
    return delgete.state.canvas && delgete.state.canvas.forEachObject(callback, context);
  };

  delgete.getObjects = function (type) {
    return delgete.state.canvas && delgete.state.canvas.getObjects(type);
  };

  delgete.item = function (index) {
    return delgete.state.canvas && delgete.state.canvas.item(index);
  };

  delgete.isEmpty = function () {
    return delgete.state.canvas && delgete.state.canvas.isEmpty();
  };

  delgete.size = function () {
    return delgete.state.canvas && delgete.state.canvas.size();
  };

  delgete.contains = function (object) {
    return delgete.state.canvas && delgete.state.canvas.contains(object);
  };

  delgete.complexity = function () {
    return delgete.state.canvas && delgete.state.canvas.complexity(object);
  };
}

function observableMixin(delgete) {
  delgete.observe = function (eventName, handler) {
    return delgete.state.canvas && delgete.state.canvas.observe(eventName, handler);
  };

  delgete.stopObserving = function (eventName, handler) {
    return delgete.state.canvas && delgete.state.canvas.stopObserving(eventName, handler);
  };

  delgete.fire = function (eventName, options) {
    return delgete.state.canvas && delgete.state.canvas.fire(eventName, options);
  };

  delgete.on = delgete.observe;
  delgete.off = delgete.stopObserving;
  delgete.trigger = delgete.fire;
}

var StaticCanvas = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(StaticCanvas, _React$Component);

  function StaticCanvas(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    _this.state = {
      canvas: null
    };
    collectionMixin(_assertThisInitialized(_this));
    observableMixin(_assertThisInitialized(_this));

    _this.absolutePan = function (point) {
      return _this.state.canvas && _this.state.canvas.absolutePan(point);
    };

    _this.bringForward = function (object, intersecting) {
      return _this.state.canvas && _this.state.canvas.bringForward(object, intersecting);
    };

    _this.bringToFront = function (object) {
      return _this.state.canvas && _this.state.canvas.bringToFront(object);
    };

    _this.centerObject = function (object) {
      return _this.state.canvas && _this.state.canvas.centerObject(object);
    };

    _this.centerObjectH = function (object) {
      return _this.state.canvas && _this.state.canvas.centerObjectH(object);
    };

    _this.centerObjectV = function (object) {
      return _this.state.canvas && _this.state.canvas.centerObjectV(object);
    };

    _this.clear = function () {
      return _this.state.canvas && _this.state.canvas.clear();
    };

    _this.clearContext = function (ctx) {
      return _this.state.canvas && _this.state.canvas.clearContext(ctx);
    };

    _this.clone = function (callback, properties) {
      return _this.state.canvas && _this.state.canvas.clone(callback, properties);
    };

    _this.cloneWithoutData = function (callback) {
      return _this.state.canvas && _this.state.canvas.cloneWithoutData(callback);
    };

    _this.dispose = function () {
      return _this.state.canvas && _this.state.canvas.dispose();
    };

    _this.fxCenterObjectH = function (object, callbacks) {
      return _this.state.canvas && _this.state.canvas.fxCenterObjectH(object, callbacks);
    };

    _this.fxCenterObjectV = function (object, callbacks) {
      return _this.state.canvas && _this.state.canvas.fxCenterObjectV(object, callbacks);
    };

    _this.fxRemove = function (object, callbacks) {
      return _this.state.canvas && _this.state.canvas.fxRemove(object, callbacks);
    };

    _this.fxStraightenObject = function (object) {
      return _this.state.canvas && _this.state.canvas.fxStraightenObject(object);
    };

    _this.getActiveGroup = function () {
      return _this.state.canvas && _this.state.canvas.getActiveGroup();
    };

    _this.getActiveObject = function () {
      return _this.state.canvas && _this.state.canvas.getActiveObject();
    };

    _this.getCenter = function () {
      return _this.state.canvas && _this.state.canvas.getCenter();
    };

    _this.getContext = function () {
      return _this.state.canvas && _this.state.canvas.getContext();
    };

    _this.getElement = function () {
      return _this.state.canvas && _this.state.canvas.getElement();
    };

    _this.getHeight = function () {
      return _this.state.canvas && _this.state.canvas.getHeight();
    };

    _this.getWidth = function () {
      return _this.state.canvas && _this.state.canvas.getWidth();
    };

    _this.getZoom = function () {
      return _this.state.canvas && _this.state.canvas.getZoom();
    };

    _this.loadFromDatalessJSON = function (json, callback, reviver) {
      return _this.state.canvas && _this.state.canvas.loadFromDatalessJSON(json, callback, reviver);
    };

    _this.loadFromJSON = function (json, callback, reviver) {
      return _this.state.canvas && _this.state.canvas.loadFromJSON(json, callback, reviver);
    };

    _this.moveTo = function (object, index) {
      return _this.state.canvas && _this.state.canvas.moveTo(object, index);
    };

    _this.onBeforeScaleRotate = function () {
      return _this.state.canvas && _this.state.canvas.onBeforeScaleRotate();
    };

    _this.relativePan = function (point) {
      return _this.state.canvas && _this.state.canvas.relativePan(point);
    };

    _this.renderAll = function (allOnTop) {
      return _this.state.canvas && _this.state.canvas.renderAll(allOnTop);
    };

    _this.renderTop = function () {
      return _this.state.canvas && _this.state.canvas.renderTop();
    };

    _this.sendBackwards = function (object, intersecting) {
      return _this.state.canvas && _this.state.canvas.sendBackwards(object, intersecting);
    };

    _this.sendToBack = function (object) {
      return _this.state.canvas && _this.state.canvas.sendToBack(object);
    };

    _this.setBackgroundColor = function (backgroundColor, callback) {
      return _this.state.canvas && _this.state.canvas.setBackgroundColor(backgroundColor, callback);
    };

    _this.setBackgroundImage = function (image, callback, options) {
      return _this.state.canvas && _this.state.canvas.setBackgroundImage(image, callback, options);
    };

    _this.setDimensions = function (dimensions, options) {
      return _this.state.canvas && _this.state.canvas.setDimensions(dimensions, options);
    };

    _this.setHeight = function (value, options) {
      return _this.state.canvas && _this.state.canvas.setHeight(value, options);
    };

    _this.setOverlayColor = function (overlayColor, callback) {
      return _this.state.canvas && _this.state.canvas.setOverlayColor(overlayColor, callback);
    };

    _this.setOverlayImage = function (image, callback, options) {
      return _this.state.canvas && _this.state.canvas.setOverlayImage(image, callback, options);
    };

    _this.setViewportTransform = function (vpt) {
      return _this.state.canvas && _this.state.canvas.setViewportTransform(vpt);
    };

    _this.setWidth = function (value, options) {
      return _this.state.canvas && _this.state.canvas.setWidth(value, options);
    };

    _this.setZoom = function (value) {
      return _this.state.canvas && _this.state.canvas.setZoom(value);
    };

    _this.straightenObject = function (object) {
      return _this.state.canvas && _this.state.canvas.straightenObject(object);
    };

    _this.toDatalessJSON = function (propertiesToInclude) {
      return _this.state.canvas && _this.state.canvas.toDatalessJSON(propertiesToInclude);
    };

    _this.toDatalessObject = function (propertiesToInclude) {
      return _this.state.canvas && _this.state.canvas.toDatalessObject(propertiesToInclude);
    };

    _this.toDataURL = function (options) {
      return _this.state.canvas && _this.state.canvas.toDataURL(options);
    };

    _this.toDataURLWithMultiplier = function (format, multiplier, quality) {
      return _this.state.canvas && _this.state.canvas.toDataURLWithMultiplier(format, multiplier, quality);
    };

    _this.toJSON = function (propertiesToInclude) {
      return _this.state.canvas && _this.state.canvas.toJSON(propertiesToInclude);
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.canvas && _this.state.canvas.toObject(propertiesToInclude);
    };

    _this.toString = function () {
      return _this.state.canvas && _this.state.canvas.toString();
    };

    _this.toSVG = function (options, reviver) {
      return _this.state.canvas && _this.state.canvas.toSVG(options, reviver);
    };

    _this.zoomToPoint = function (point, value) {
      return _this.state.canvas && _this.state.canvas.zoomToPoint(point, value);
    };

    _this.getChild = _this.getChild.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = StaticCanvas.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var canvas = new fabric.fabric.Canvas(this.props.id);
    this.setState({
      canvas: canvas
    }, function () {
      _this2.initEvent.call(_this2);

      Object.keys(_this2.ref).forEach(function (key) {
        var ref = _this2.ref[key];
        ref.draw(function (obj) {
          return _this2.add(obj);
        });
      });
    });
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    this.prevRef = {};
    Object.keys(this.ref).forEach(function (key) {
      _this3.prevRef[key] = _this3.ref[key];
    });
    this.ref = {};

    if (diff(this.props.backgroundColor, nextProps.backgroundColor)) {
      this.setBackgroundColor(nextProps.backgroundColor);
    }

    if (diff(this.props.backgroundImage, nextProps.backgroundImage)) {
      this.setBackgroundImage(nextProps.backgroundImage);
    }

    if (this.props.height !== nextProps.height) {
      this.state.canvas.setHeight(nextProps.height);
    }

    if (this.props.width !== nextProps.width) {
      this.state.canvas.setHeight(nextProps.width);
    }

    if (diff(this.props.overlayColor, nextProps.overlayColor)) {
      this.setOverlayColor(nextProps.overlayColor);
    }

    if (diff(this.props.overlayImage, nextProps.overlayImage)) {
      this.setOverlayImage(nextProps.overlayImage);
    }

    if (diff(this.props.viewportTransform, nextProps.viewportTransform)) {
      this.setViewportTransform(nextProps.viewportTransform);
    }

    this.eventChanged(nextProps);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this4 = this;

    if (prevState.canvas) {
      React__default.Children.map(this.props.children, function (child, i) {
        if (!child) return;
        var key = child.ref ? child.ref : "layer" + i;
        var ref = _this4.ref[key];
        ref.draw(function (obj) {
          return _this4.add(obj);
        });
      });
      Object.keys(this.prevRef).forEach(function (key) {
        var ref = _this4.prevRef[key];

        _this4.remove(ref.getObject());
      });
    }

    this.state.canvas && this.state.canvas.renderAll();
  };

  _proto.initEvent = function initEvent() {
    var canvas = this.state.canvas;
    if (!canvas) return;

    if (this.props.beforeRender instanceof Function) {
      canvas.on('before:render', this.props.beforeRender);
    }

    if (this.props.afterRender instanceof Function) {
      canvas.on('after:render', this.props.afterRender);
    }

    if (this.props.onCanvasCleared instanceof Function) {
      canvas.on('canvas:cleared', this.props.onCanvasCleared);
    }

    if (this.props.onObjectAdded instanceof Function) {
      canvas.on('object:added', this.props.onObjectAdded);
    }

    if (this.props.onObjectRemoved instanceof Function) {
      canvas.on('object:removed', this.props.onObjectRemoved);
    }
  };

  _proto.eventChanged = function eventChanged(nextProps) {
    var canvas = this.state.canvas;
    if (!canvas) return;

    if (this.props.beforeRender && !nextProps.beforeRender) {
      canvas.off('before:render');
    } else if (nextProps.beforeRender instanceof Function) {
      canvas.on('before:render', this.props.beforeRender);
    }

    if (this.props.afterRender && !nextProps.afterRender) {
      object.off('after:render');
    } else if (nextProps.afterRender instanceof Function) {
      object.on('after:render', this.props.afterRender);
    }

    if (this.props.onCanvasCleared && !nextProps.onCanvasCleared) {
      object.off('canvas:cleared');
    } else if (nextProps.onCanvasCleared instanceof Function) {
      object.on('canvas:cleared', this.props.onCanvasCleared);
    }

    if (this.props.onObjectAdded && !nextProps.onObjectAdded) {
      object.off('object:added');
    } else if (nextProps.onObjectAdded instanceof Function) {
      object.on('object:added', this.props.onObjectAdded);
    }

    if (this.props.onObjectRemoved && !nextProps.onObjectRemoved) {
      object.off('object:removed');
    } else if (nextProps.onObjectRemoved instanceof Function) {
      object.on('object:removed', this.props.onObjectRemoved);
    }
  };

  _proto.getChild = function getChild(ref) {
    return this.ref[ref];
  };

  _proto.render = function render() {
    var _this5 = this;

    var _this$props = this.props,
        id = _this$props.id,
        children = _this$props.children;
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("canvas", {
      id: id,
      width: this.props.width,
      height: this.props.height
    }), this.state.canvas && React__default.Children.map(children, function (child, i) {
      return child && React__default.cloneElement(child, {
        ref: function ref(c) {
          if (c) {
            _this5.ref[child.ref || "layer" + i] = c;
          }
        }
      });
    }));
  };

  return StaticCanvas;
}(React__default.Component);
StaticCanvas.emptyJSON = fabric.fabric.StaticCanvas.EMPTY_JSON;

StaticCanvas.supports = function (methodName) {
  return fabric.fabric.StaticCanvas.supports(methodName);
};

StaticCanvas.propTypes = {
  allowTouchScrolling: React.PropTypes.bool,
  backgroundColor: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(fabric.fabric.Pattern)]),
  backgroundImage: React.PropTypes.instanceOf(fabric.fabric.Image),
  clipTo: React.PropTypes.func,
  controlsAboveOverlay: React.PropTypes.bool,
  FX_DURATION: React.PropTypes.number,
  imageSmoothingEnabled: React.PropTypes.bool,
  includeDefaultValues: React.PropTypes.bool,
  overlayColor: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.instanceOf(fabric.fabric.Pattern)]),
  overlayImage: React.PropTypes.instanceOf(fabric.fabric.Image),
  preserveObjectStacking: React.PropTypes.bool,
  renderOnAddRemove: React.PropTypes.bool,
  stateful: React.PropTypes.bool,
  svgViewportTransformation: React.PropTypes.bool,
  viewportTransform: React.PropTypes.array,
  width: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  height: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  id: React.PropTypes.string,
  beforeRender: React.PropTypes.func,
  afterRender: React.PropTypes.func,
  onCanvasCleared: React.PropTypes.func,
  onObjectAdded: React.PropTypes.func,
  onObjectRemoved: React.PropTypes.func
};
StaticCanvas.defaultProps = {
  allowTouchScrolling: false,
  backgroundColor: '',
  backgroundImage: null,
  clipTo: null,
  controlsAboveOverlay: false,
  FX_DURATION: 500,
  imageSmoothingEnabled: true,
  includeDefaultValues: true,
  overlayColor: '',
  overlayImage: null,
  preserveObjectStacking: false,
  renderOnAddRemove: true,
  stateful: true,
  svgViewportTransformation: true,
  viewportTransform: null,
  width: 100,
  height: 100,
  id: 'c'
};

var Canvas = /*#__PURE__*/function (_StaticCanvas) {
  _inheritsLoose(Canvas, _StaticCanvas);

  function Canvas(props, context) {
    var _this;

    _this = _StaticCanvas.call(this, props, context) || this;
    _this.state = {
      canvas: null
    };
    _this.ref = {};

    _this.containsPoint = function (e, target) {
      return _this.state.canvas && _this.state.canvas.containsPoint(e, target);
    };

    _this.isTargetTransparent = function (target, x, y) {
      return _this.state.canvas && _this.state.canvas.isTargetTransparent(target, x, y);
    };

    _this.setCursor = function (value) {
      return _this.state.canvas && _this.state.canvas.setCursor(value);
    };

    _this.findTarget = function (e, skipGroup) {
      return _this.state.canvas && _this.state.canvas.findTarget(e, skipGroup);
    };

    _this.getPointer = function (e, ignoreZoom, upperCanvasEl) {
      return _this.state.canvas && _this.state.canvas.getPointer(e, ignoreZoom, upperCanvasEl);
    };

    _this.getSelectionContext = function () {
      return _this.state.canvas && _this.state.canvas.getSelectionContext();
    };

    _this.getSelectionElement = function () {
      return _this.state.canvas && _this.state.canvas.getSelectionElement();
    };

    _this.setActiveObject = function (object, e) {
      return _this.state.canvas && _this.state.canvas.setActiveObject(object, e);
    };

    _this.getActiveObject = function () {
      return _this.state.canvas && _this.state.canvas.getActiveObject();
    };

    _this.discardActiveObject = function (e) {
      return _this.state.canvas && _this.state.canvas.discardActiveObject(e);
    };

    _this.setActiveGroup = function (group, e) {
      return _this.state.canvas && _this.state.canvas.setActiveGroup(group, e);
    };

    _this.discardActiveGroup = function (e) {
      return _this.state.canvas && _this.state.canvas.discardActiveGroup(e);
    };

    _this.deactivateAll = function () {
      return _this.state.canvas && _this.state.canvas.deactivateAll();
    };

    _this.deactivateAllWithDispatch = function (e) {
      return _this.state.canvas && _this.state.canvas.deactivateAllWithDispatch(e);
    };

    _this.dispose = function () {
      return _this.state.canvas && _this.state.canvas.dispose();
    };

    _this.drawControls = function (ctx) {
      return _this.state.canvas && _this.state.canvas.drawControls(ctx);
    };

    return _this;
  }

  return Canvas;
}(StaticCanvas);
Canvas.propTypes = Object.assign(StaticCanvas.propTypes, {
  uniScaleTransform: React.PropTypes.bool,
  centeredScaling: React.PropTypes.bool,
  centeredRotation: React.PropTypes.bool,
  interactive: React.PropTypes.bool,
  selection: React.PropTypes.bool,
  selectionColor: React.PropTypes.string,
  selectionDashArray: React.PropTypes.array,
  selectionBorderColor: React.PropTypes.string,
  selectionLineWidth: React.PropTypes.number,
  hoverCursor: React.PropTypes.string,
  moveCursor: React.PropTypes.string,
  defaultCursor: React.PropTypes.string,
  freeDrawingCursor: React.PropTypes.string,
  rotationCursor: React.PropTypes.string,
  containerClass: React.PropTypes.string,
  perPixelTargetFind: React.PropTypes.bool,
  targetFindTolerance: React.PropTypes.number,
  skipTargetFind: React.PropTypes.bool,
  isDrawingMode: React.PropTypes.bool
});
Canvas.defaultProps = Object.assign(StaticCanvas.defaultProps, {
  uniScaleTransform: false,
  centeredScaling: false,
  centeredRotation: false,
  interactive: true,
  selection: true,
  selectionColor: 'rgba(100, 100, 255, 0.3)',
  selectionDashArray: [],
  selectionBorderColor: 'rgba(255, 255, 255, 0.3)',
  selectionLineWidth: 1,
  hoverCursor: 'move',
  moveCursor: 'move',
  defaultCursor: 'default',
  freeDrawingCursor: 'crosshair',
  rotationCursor: 'crosshair',
  containerClass: 'canvas-container',
  perPixelTargetFind: false,
  targetFindTolerance: 0,
  skipTargetFind: false,
  isDrawingMode: false
});

var FabricObject = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FabricObject, _React$Component);

  function FabricObject(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    observableMixin(_assertThisInitialized(_this));

    _this.adjustPosition = function (to) {
      return _this.state.object && _this.state.object.adjustPosition(to);
    };

    _this.animate = function (property, value, opts) {
      return _this.state.object && _this.state.object.animate(property, value, opts);
    };

    _this.bringForward = function (intersecting) {
      return _this.state.object && _this.state.object.bringForward(intersecting);
    };

    _this.bringToFront = function () {
      return _this.state.object && _this.state.object.bringToFront();
    };

    _this.center = function () {
      return _this.state.object && _this.state.object.center();
    };

    _this.centerH = function () {
      return _this.state.object && _this.state.object.centerH();
    };

    _this.centerV = function () {
      return _this.state.object && _this.state.object.centerV();
    };

    _this.clone = function (callback, propertiesToInclude) {
      return _this.state.object && _this.state.object.clone(callback, propertiesToInclude);
    };

    _this.cloneAsImage = function (callback) {
      return _this.state.object && _this.state.object.cloneAsImage(callback);
    };

    _this.complexity = function () {
      return _this.state.object && _this.state.object.complexity();
    };

    _this.containsPoint = function (point) {
      return _this.state.object && _this.state.object.containsPoint(point);
    };

    _this.drawBorders = function (ctx) {
      return _this.state.object && _this.state.object.drawBorders(ctx);
    };

    _this.drawControls = function (ctx) {
      return _this.state.object && _this.state.object.drawControls(ctx);
    };

    _this.fxStraighten = function (callbacks) {
      return _this.state.object && _this.state.object.fxStraighten(callbacks);
    };

    _this.get = function (property) {
      return _this.state.object && _this.state.object.get(property);
    };

    _this.getAngle = function () {
      return _this.state.object && _this.state.object.getAngle();
    };

    _this.getBoundingRect = function () {
      return _this.state.object && _this.state.object.getBoundingRect();
    };

    _this.getBoundingRectHeight = function () {
      return _this.state.object && _this.state.object.getBoundingRectHeight();
    };

    _this.getBoundingRectWidth = function () {
      return _this.state.object && _this.state.object.getBoundingRectWidth();
    };

    _this.getCenterPoint = function () {
      return _this.state.object && _this.state.object.getCenterPoint();
    };

    _this.getClipTo = function () {
      return _this.state.object && _this.state.object.getClipTo();
    };

    _this.getFill = function () {
      return _this.state.object && _this.state.object.getFill();
    };

    _this.getFlipX = function () {
      return _this.state.object && _this.state.object.getFlipX();
    };

    _this.getFlipY = function () {
      return _this.state.object && _this.state.object.getFlipY();
    };

    _this.getLeft = function () {
      return _this.state.object && _this.state.object.getLeft();
    };

    _this.getLocalPointer = function (e, pointer) {
      return _this.state.object && _this.state.object.getLocalPointer(e, pointer);
    };

    _this.getOpacity = function () {
      return _this.state.object && _this.state.object.getOpacity();
    };

    _this.getOriginX = function () {
      return _this.state.object && _this.state.object.getOriginX();
    };

    _this.getOriginY = function () {
      return _this.state.object && _this.state.object.getOriginY();
    };

    _this.getPointByOrigin = function (originX, originY) {
      return _this.state.object && _this.state.object.getPointByOrigin(originX, originY);
    };

    _this.getScaleX = function () {
      return _this.state.object && _this.state.object.getScaleX();
    };

    _this.getScaleY = function () {
      return _this.state.object && _this.state.object.getScaleY();
    };

    _this.getShadow = function () {
      return _this.state.object && _this.state.object.getShadow();
    };

    _this.getStrokeWidth = function () {
      return _this.state.object && _this.state.object.getStrokeWidth();
    };

    _this.getSvgStyles = function () {
      return _this.state.object && _this.state.object.getSvgStyles();
    };

    _this.getSvgTransform = function () {
      return _this.state.object && _this.state.object.getSvgTransform();
    };

    _this.getSvgTransformMatrix = function () {
      return _this.state.object && _this.state.object.getSvgTransformMatrix();
    };

    _this.getTop = function () {
      return _this.state.object && _this.state.object.getTop();
    };

    _this.getTransformMatrix = function () {
      return _this.state.object && _this.state.object.getTransformMatrix();
    };

    _this.getViewportTransform = function () {
      return _this.state.object && _this.state.object.getViewportTransform();
    };

    _this.getVisible = function () {
      return _this.state.object && _this.state.object.getVisible();
    };

    _this.getWidth = function () {
      return _this.state.object && _this.state.object.getWidth();
    };

    _this.hasStateChanged = function () {
      return _this.state.object && _this.state.object.hasStateChanged();
    };

    _this.intersectsWithObject = function (other) {
      return _this.state.object && _this.state.object.intersectsWithObject(other);
    };

    _this.intersectsWithRect = function (pointTL, pointBR) {
      return _this.state.object && _this.state.object.intersectsWithRect(pointTL, pointBR);
    };

    _this.isContainedWithinObject = function (other) {
      return _this.state.object && _this.state.object.isContainedWithinObject(other);
    };

    _this.isContainedWithinRect = function (pointTL, pointBR) {
      return _this.state.object && _this.state.object.isContainedWithinRect(pointTL, pointBR);
    };

    _this.isControlVisible = function (controlName) {
      return _this.state.object && _this.state.object.isControlVisible(controlName);
    };

    _this.isType = function (type) {
      return _this.state.object && _this.state.object.isType(type);
    };

    _this.moveTo = function (index) {
      return _this.state.object && _this.state.object.moveTo(index);
    };

    _this.remove = function () {
      return _this.state.object && _this.state.object.remove();
    };

    _this.renderf = function (ctx, noTransform) {
      return _this.state.object && _this.state.object.render(ctx, noTransform);
    };

    _this.saveState = function (options) {
      return _this.state.object && _this.state.object.saveState(options);
    };

    _this.scale = function (value) {
      return _this.state.object && _this.state.object.scale(value);
    };

    _this.scaleToHeight = function (value) {
      return _this.state.object && _this.state.object.scaleToHeight(value);
    };

    _this.scaleToWidth = function (value) {
      return _this.state.object && _this.state.object.scaleToWidth(value);
    };

    _this.sendBackwards = function () {
      return _this.state.object && _this.state.object.sendBackwards();
    };

    _this.sendToBack = function () {
      return _this.state.object && _this.state.object.sendToBack();
    };

    _this.set = function (key, value) {
      return _this.state.object && _this.state.object.set(key, value);
    };

    _this.setAngle = function (value) {
      return _this.state.object && _this.state.object.setAngle(value);
    };

    _this.setClipTo = function (clipTo) {
      return _this.state.object && _this.state.object.setClipTo(clipTo);
    };

    _this.setColor = function (color) {
      return _this.state.object && _this.state.object.setColor(color);
    };

    _this.setControlsVisibility = function (options) {
      return _this.state.object && _this.state.object.setControlsVisibility(options);
    };

    _this.setControlVisible = function (controlName, visible) {
      return _this.state.object && _this.state.object.setControlVisible(controlName, visible);
    };

    _this.setCoords = function (value) {
      return _this.state.object && _this.state.object.setCoords(value);
    };

    _this.setFill = function (value) {
      return _this.state.object && _this.state.object.setFill(value);
    };

    _this.setFlipX = function (value) {
      return _this.state.object && _this.state.object.setFlipX(value);
    };

    _this.setFlipY = function (value) {
      return _this.state.object && _this.state.object.setFlipY(value);
    };

    _this.setGradient = function (property, options) {
      return _this.state.object && _this.state.object.setGradient(property, options);
    };

    _this.setLeft = function (value) {
      return _this.state.object && _this.state.object.setLeft(value);
    };

    _this.setOpacity = function (value) {
      return _this.state.object && _this.state.object.setOpacity(value);
    };

    _this.setOptions = function (options) {
      return _this.state.object && _this.state.object.setOptions(options);
    };

    _this.setOriginX = function (value) {
      return _this.state.object && _this.state.object.setOriginX(value);
    };

    _this.setOriginY = function (value) {
      return _this.state.object && _this.state.object.setOriginY(value);
    };

    _this.setPatternFill = function (options) {
      return _this.state.object && _this.state.object.setPatternFill(options);
    };

    _this.setPositionByOrigin = function (pos, originX, originY) {
      return _this.state.object && _this.state.object.setPositionByOrigin(pos, originX, originY);
    };

    _this.setScaleX = function (value) {
      return _this.state.object && _this.state.object.setScaleX(value);
    };

    _this.setScaleY = function (value) {
      return _this.state.object && _this.state.object.setScaleY(value);
    };

    _this.setShadow = function (options) {
      return _this.state.object && _this.state.object.setShadow(options);
    };

    _this.setSourcePath = function (value) {
      return _this.state.object && _this.state.object.setSourcePath(value);
    };

    _this.setStroke = function (value) {
      return _this.state.object && _this.state.object.setStroke(value);
    };

    _this.setStrokeWidth = function (value) {
      return _this.state.object && _this.state.object.setStrokeWidth(value);
    };

    _this.setTop = function (value) {
      return _this.state.object && _this.state.object.setTop(value);
    };

    _this.setTransformMatrix = function (transformMatrix) {
      return _this.state.object && _this.state.object.setTransformMatrix(transformMatrix);
    };

    _this.setupState = function () {
      return _this.state.object && _this.state.object.setupState(value);
    };

    _this.setVisible = function (value) {
      return _this.state.object && _this.state.object.setVisible(value);
    };

    _this.straighten = function () {
      return _this.state.object && _this.state.object.straighten();
    };

    _this.toDatalessObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toDatalessObject();
    };

    _this.toDataURL = function () {
      return _this.state.object && _this.state.object.toDataURL(options);
    };

    _this.toggle = function (property) {
      return _this.state.object && _this.state.object.toggle(property);
    };

    _this.toJSON = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toJSON(propertiesToInclude);
    };

    _this.toLocalPoint = function (point, originX, originY) {
      return _this.state.object && _this.state.object.toLocalPoint(point, originX, originY);
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toString = function () {
      return _this.state.object && _this.state.object.toString();
    };

    _this.transform = function (ctx, fromLeft) {
      return _this.state.object && _this.state.object.transform(ctx, fromLeft);
    };

    _this.translateToCenterPoint = function (point, originX, originY) {
      return _this.state.object && _this.state.object.translateToCenterPoint(point, originX, originY);
    };

    _this.translateToOriginPoint = function (point, originX, originY) {
      return _this.state.object && _this.state.object.translateToOriginPoint(point, originX, originY);
    };

    _this.getObject = function () {
      return _this.state.object;
    };

    return _this;
  }

  var _proto = FabricObject.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var difference = diff(this.props, nextProps);

    if (difference) {
      difference.forEach(function (comparsion) {
        _this2.set(comparsion.path[0], comparsion.rhs);
      });
    }

    this.eventChanged(nextProps);
  };

  _proto.draw = function draw(object, cb) {
    var _this3 = this;

    this.setState({
      object: object
    }, function () {
      cb && cb(object);

      _this3.initEvent();
    });
  };

  _proto.initEvent = function initEvent() {
    var object = this.state.object;
    if (!(object instanceof fabric.fabric.Object)) return;

    if (this.props.onAdded instanceof Function) {
      object.on('added', this.props.onAdded);
    }

    if (this.props.onRemoved instanceof Function) {
      object.on('removed', this.props.onRemoved);
    }

    if (this.props.onSelected instanceof Function) {
      object.on('selected', this.props.onSelected);
    }

    if (this.props.onModified instanceof Function) {
      object.on('modified', this.props.onModified);
    }

    if (this.props.onRotating instanceof Function) {
      object.on('rotating', this.props.onRotating);
    }

    if (this.props.onScaling instanceof Function) {
      object.on('scaling', this.props.onScaling);
    }

    if (this.props.onMoving instanceof Function) {
      object.on('moving', this.props.onMoving);
    }

    if (this.props.onMousedown instanceof Function) {
      object.on('mousedown', this.props.onMousedown);
    }

    if (this.props.onMouseup instanceof Function) {
      object.on('mouseup', this.props.onMouseup);
    }
  };

  _proto.eventChanged = function eventChanged(nextProps) {
    var object = this.state.object;
    if (!(object instanceof fabric.fabric.Object)) return;

    if (this.props.onAdded && !nextProps.onAdded) {
      object.off('added');
    } else if (nextProps.onAdded instanceof Function) {
      object.on('added', this.props.onAdded);
    }

    if (this.props.onRemoved && !nextProps.onRemoved) {
      object.off('removed');
    } else if (nextProps.onRemoved instanceof Function) {
      object.on('removed', this.props.onRemoved);
    }

    if (this.props.onSelected && !nextProps.onSelected) {
      object.off('selected');
    } else if (nextProps.onSelected instanceof Function) {
      object.on('selected', this.props.onSelected);
    }

    if (this.props.onModified && !nextProps.onModified) {
      object.off('modified');
    } else if (nextProps.onModified instanceof Function) {
      object.on('modified', this.props.onModified);
    }

    if (this.props.onRotating && !nextProps.onRotating) {
      object.off('rotating');
    } else if (nextProps.onRotating instanceof Function) {
      object.on('rotating', this.props.onRotating);
    }

    if (this.props.onScaling && !nextProps.onScaling) {
      object.off('scaling');
    } else if (nextProps.onScaling instanceof Function) {
      object.on('scaling', this.props.onScaling);
    }

    if (this.props.onMoving && !nextProps.onMoving) {
      object.off('moving');
    } else if (nextProps.onMoving instanceof Function) {
      object.on('moving', this.props.onMoving);
    }

    if (this.props.onMousedown && !nextProps.onMousedown) {
      object.off('mousedown');
    } else if (nextProps.onMousedown instanceof Function) {
      object.on('mousedown', this.props.onMousedown);
    }

    if (this.props.onMouseup && !nextProps.onMouseup) {
      object.off('mouseup');
    } else if (nextProps.onMouseup instanceof Function) {
      object.on('mouseup', this.props.onMouseup);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return FabricObject;
}(React__default.Component);
FabricObject.__uid = fabric.fabric.Object.__uid;
FabricObject.NUM_FRACTION_DIGITS = fabric.fabric.Object.NUM_FRACTION_DIGITS;
FabricObject.rotate = fabric.fabric.Object.rotate;
FabricObject.propTypes = {
  angle: React.PropTypes.number,
  backgroundColor: React.PropTypes.string,
  borderColor: React.PropTypes.string,
  borderOpacityWhenMoving: React.PropTypes.number,
  borderScaleFactor: React.PropTypes.number,
  centeredRotation: React.PropTypes.bool,
  centeredScaling: React.PropTypes.bool,
  clipTo: React.PropTypes.func,
  cornerColor: React.PropTypes.string,
  cornerSize: React.PropTypes.number,
  evented: React.PropTypes.bool,
  fill: React.PropTypes.string,
  fillRule: React.PropTypes.string,
  flipX: React.PropTypes.bool,
  flipY: React.PropTypes.bool,
  globalCompositeOperation: React.PropTypes.string,
  hasBorders: React.PropTypes.bool,
  hasControls: React.PropTypes.bool,
  hasRotatingPoint: React.PropTypes.bool,
  height: React.PropTypes.number,
  hoverCursor: React.PropTypes.string,
  includeDefaultValues: React.PropTypes.bool,
  left: React.PropTypes.number,
  lockMovementX: React.PropTypes.bool,
  lockMovementY: React.PropTypes.bool,
  lockRotation: React.PropTypes.bool,
  lockScalingFlip: React.PropTypes.bool,
  lockScalingX: React.PropTypes.bool,
  lockScalingY: React.PropTypes.bool,
  lockUniScaling: React.PropTypes.bool,
  minScaleLimit: React.PropTypes.number,
  oCoords: React.PropTypes.object,
  opacity: React.PropTypes.number,
  originX: React.PropTypes.oneOf(['left', 'right', 'center']),
  originY: React.PropTypes.oneOf(['top', 'bottom', 'center']),
  padding: React.PropTypes.number,
  perPixelTargetFind: React.PropTypes.bool,
  rotatingPointOffset: React.PropTypes.number,
  scaleX: React.PropTypes.number,
  scaleY: React.PropTypes.number,
  selectable: React.PropTypes.bool,
  shadow: React.PropTypes.oneOfType([React__default.PropTypes.instanceOf(fabric.fabric.Shadow), React.PropTypes.string]),
  stateProperties: React.PropTypes.array,
  stroke: React.PropTypes.string,
  strokeDashArray: React.PropTypes.array,
  strokeLineCap: React.PropTypes.oneOf(['butt', 'round', 'square']),
  strokeLineJoin: React.PropTypes.oneOf(['bevil', 'round', 'miter']),
  strokeMiterLimit: React.PropTypes.number,
  strokeWidth: React.PropTypes.number,
  top: React.PropTypes.number,
  transformMatrix: React.PropTypes.array,
  transparentCorners: React.PropTypes.bool,
  type: React.PropTypes.string,
  visible: React.PropTypes.bool,
  width: React.PropTypes.number
};
FabricObject.defaultProps = {
  type: 'object',
  originX: 'left',
  originY: 'top',
  top: 0,
  left: 0,
  width: 0,
  height: 0,
  scaleX: 1,
  scaleY: 1,
  flipX: false,
  flipY: false,
  opacity: 1,
  angle: 0,
  skewX: 0,
  skewY: 0,
  cornerSize: 12,
  transparentCorners: true,
  hoverCursor: null,
  padding: 0,
  borderColor: 'rgba(102,153,255,0.75)',
  cornerColor: 'rgba(102,153,255,0.5)',
  centeredScaling: false,
  centeredRotation: true,
  fill: 'rgb(0,0,0)',
  fillRule: 'nonzero',
  globalCompositeOperation: 'source-over',
  backgroundColor: '',
  stroke: null,
  strokeWidth: 1,
  strokeDashArray: null,
  strokeLineCap: 'butt',
  strokeLineJoin: 'miter',
  strokeMiterLimit: 10,
  shadow: null,
  borderOpacityWhenMoving: 0.4,
  borderScaleFactor: 1,
  transformMatrix: null,
  minScaleLimit: 0.01,
  selectable: true,
  evented: true,
  visible: true,
  hasControls: true,
  hasBorders: true,
  hasRotatingPoint: true,
  rotatingPointOffset: 40,
  perPixelTargetFind: false,
  includeDefaultValues: true,
  clipTo: null,
  lockMovementX: false,
  lockMovementY: false,
  lockRotation: false,
  lockScalingX: false,
  lockScalingY: false,
  lockUniScaling: false,
  lockSkewingX: false,
  lockSkewingY: false,
  lockScalingFlip: false,
  stateProperties: ('top left width height scaleX scaleY flipX flipY originX originY transformMatrix ' + 'stroke strokeWidth strokeDashArray strokeLineCap strokeLineJoin strokeMiterLimit ' + 'angle opacity fill fillRule globalCompositeOperation shadow clipTo visible backgroundColor ' + 'alignX alignY meetOrSlice skewX skewY').split(' ')
};

var PI = Math.PI;

var Circle$1 = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Circle, _FabricObject);

  function Circle(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.getRadiusX = function () {
      return _this.state.object && _this.state.object.getRadiusX();
    };

    _this.getRadiusY = function () {
      return _this.state.object && _this.state.object.getRadiusY();
    };

    _this.setRadius = function (value) {
      return _this.state.object && _this.state.object.setRadius(value);
    };

    _this.renderf = function (ctx, noTransform) {
      return _this.state.object && _this.state.object.render(ctx, noTransform);
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Circle.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Circle.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Circle.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Circle(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  _proto.render = function render() {
    return /*#__PURE__*/React__default.createElement("div", null);
  };

  return Circle;
}(FabricObject);

Circle$1.fromElement = function (element, options) {
  return fabric.fabric.Circle.fromElement(element, options);
};

Circle$1.fromObject = function (object) {
  return fabric.fabric.Circle.fromObject(object);
};

Circle$1.attribute = fabric.fabric.Circle.ATTRIBUTE_NAMES;
Circle$1.propTypes = Object.assign(FabricObject.propTypes, {
  endAngle: React.PropTypes.number,
  radius: React.PropTypes.number,
  startAngle: React.PropTypes.number
});
Circle$1.defaultProps = Object.assign(FabricObject.defaultProps, {
  endAngle: 2 * PI,
  radius: 0,
  startAngle: 0,
  type: 'circle'
});

var Ellipse = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Ellipse, _FabricObject);

  function Ellipse(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.getRx = function () {
      return _this.state.object && _this.state.object.getRx();
    };

    _this.getRy = function () {
      return _this.state.object && _this.state.object.getRy();
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toObject(reviver);
    };

    _this.renderf = function () {
      return _this.state.object && _this.state.object.render();
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Ellipse.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Ellipse.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Ellipse.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Ellipse(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Ellipse;
}(FabricObject);

Ellipse.fromElement = function (element, options) {
  return fabric.fabric.Ellipse.fromElement(element, options);
};

Ellipse.fromObject = function (object) {
  return fabric.fabric.Ellipse.fromObject(object);
};

Ellipse.attribute = fabric.fabric.Ellipse.ATTRIBUTE_NAMES;
Ellipse.propTypes = Object.assign(FabricObject.propTypes, {
  rx: React.PropTypes.number,
  ry: React.PropTypes.number
});
Ellipse.defaultProps = Object.assign(FabricObject.defaultProps, {
  rx: 0,
  ry: 0,
  type: 'ellipse'
});

var Line = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Line, _FabricObject);

  function Line(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.calcLinePoints = function () {
      return _this.state.object && _this.state.object.calcLinePoints();
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Line.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Line.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Line.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Line(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Line;
}(FabricObject);

Circle.fromElement = function (element, options) {
  return fabric.fabric.Line.fromElement(element, options);
};

Circle.fromObject = function (object) {
  return fabric.fabric.Line.fromObject(object);
};

Circle.attribute = fabric.fabric.Line.ATTRIBUTE_NAMES;
Circle.propTypes = Object.assign(FabricObject.propTypes, {
  x1: React.PropTypes.number,
  y1: React.PropTypes.number,
  x2: React.PropTypes.number,
  y2: React.PropTypes.number
});
Circle.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'line',
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
});

var Path = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Path, _FabricObject);

  function Path(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toString = function () {
      return _this.state.object && _this.state.object.toString();
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toDatalessObject = function (propertiesToInclude) {
      return _this.state.object.toDatalessObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.complexity = function () {
      return _this.state.object && _this.state.object.complexity();
    };

    return _this;
  }

  var _proto = Path.prototype;

  _proto.draw = function draw(cb) {
    var _this2 = this;

    if (this.props.element instanceof Object) {
      fabric.fabric.Path.fromElement(this.props.element, function (instance) {
        return _FabricObject.prototype.draw.call(_this2, instance, cb);
      }, this.props);
    } else if (this.props.object instanceof Object) {
      fabric.fabric.Path.fromObject(this.props.object, function (instance) {
        return _FabricObject.prototype.draw.call(_this2, instance, cb);
      });
    } else {
      var object = new fabric.fabric.Path(this.props.path, this.props);

      _FabricObject.prototype.draw.call(this, object, cb);

      return object;
    }
  };

  return Path;
}(FabricObject);

Path.fromElement = function (element, callback, options) {
  return fabric.fabric.Path.fromElement(element, callback, options);
};

Path.fromObject = function (object, callback) {
  return fabric.fabric.Path.fromObject(object, callback);
};

Path.attribute = fabric.fabric.Path.ATTRIBUTE_NAMES;
Path.propTypes = Object.assign(FabricObject.propTypes, {
  path: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.string]),
  minX: React.PropTypes.number,
  minY: React.PropTypes.number
});
Path.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'path',
  path: null,
  minX: 0,
  minY: 0
});

var PathGroup = /*#__PURE__*/function (_Path) {
  _inheritsLoose(PathGroup, _Path);

  function PathGroup(props, context) {
    var _this;

    _this = _Path.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.parseDimensionsFromPaths = function (options) {
      return _this.state.object && _this.state.object.parseDimensionsFromPaths(options);
    };

    _this.renderf = function (ctx) {
      return _this.state.object && _this.state.object.renderf(ctx);
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object.toObject(propertiesToInclude);
    };

    _this.toDatalessObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toDatalessObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.toString = function () {
      return _this.state.object && _this.state.object.toSVG();
    };

    _this.isSameColor = function () {
      return _this.state.object && _this.state.object.isSameColor();
    };

    _this.complexity = function () {
      return _this.state.object && _this.state.object.complexity();
    };

    _this.getObjects = function () {
      return _this.state.object && _this.state.object.getObjects();
    };

    return _this;
  }

  var _proto = PathGroup.prototype;

  _proto.draw = function draw(cb) {
    var _this2 = this;

    if (this.props.element instanceof Object) {
      fabric.fabric.PathGroup.fromElement(this.props.element, function (instance) {
        return _Path.prototype.draw.call(_this2, instance, cb);
      }, this.props);
    } else if (this.props.object instanceof Object) {
      fabric.fabric.PathGroup.fromObject(this.props.object, function (instance) {
        return _Path.prototype.draw.call(_this2, instance, cb);
      });
    } else {
      var paths = [];

      if (this.props.children instanceof Array) {
        this.props.children.forEach(function (child) {
          return paths.push(new fabric.fabric.Path(child.props.path, child.props));
        });
      } else {
        paths.push(new fabric.fabric.Path(this.props.children.props.path, this.props.children.props));
      }

      var object = new fabric.fabric.PathGroup(paths, this.props);

      _Path.prototype.draw.call(this, object, cb);
    }
  };

  return PathGroup;
}(Path);

PathGroup.fromElement = function (element, callback, options) {
  return fabric.fabric.PathGroup.fromElement(element, callback, options);
};

PathGroup.fromObject = function (object, callback) {
  return fabric.fabric.PathGroup.fromObject(object, callback);
};

PathGroup.attribute = fabric.fabric.PathGroup.ATTRIBUTE_NAMES;
PathGroup.defaultProps = Object.assign(Path.defaultProps, {
  type: 'path-group',
  fill: ''
});

var Polygon = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Polygon, _FabricObject);

  function Polygon(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.commonRender = function () {
      return _this.state.object && _this.state.object.commonRender();
    };

    _this.complexity = function () {
      return _this.props.points ? _this.props.points.length : 0;
    };

    return _this;
  }

  var _proto = Polygon.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Polygon.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Polygon.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Polygon(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Polygon;
}(FabricObject);

Polygon.fromElement = function (element, options) {
  return fabric.fabric.Polygon.fromElement(element, options);
};

Polygon.fromObject = function (object) {
  return fabric.fabric.Polygon.fromObject(object);
};

Polygon.attribute = fabric.fabric.Polygon.ATTRIBUTE_NAMES;
Polygon.propTypes = Object.assign(FabricObject.propTypes, {
  points: React.PropTypes.array,
  minX: React.PropTypes.number,
  minY: React.PropTypes.number
});
Polygon.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'polygon',
  points: null,
  minX: 0,
  minY: 0
});

var Polyline = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Polyline, _FabricObject);

  function Polyline(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.complexity = function () {
      return _this.props.points ? _this.props.points.length : 0;
    };

    return _this;
  }

  var _proto = Polyline.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Polyline.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Polyline.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Polyline(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Polyline;
}(FabricObject);

Polyline.fromElement = function (element, options) {
  return fabric.fabric.Polyline.fromElement(element, options);
};

Polyline.fromObject = function (object) {
  return fabric.fabric.Polyline.fromObject(object);
};

Polyline.attribute = fabric.fabric.Polyline.ATTRIBUTE_NAMES;
Polyline.propTypes = Object.assign(FabricObject.propTypes, {
  points: React.PropTypes.array,
  minX: React.PropTypes.number,
  minY: React.PropTypes.number
});
Polyline.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'polyline',
  points: null,
  minX: 0,
  minY: 0
});

var Rect = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Rect, _FabricObject);

  function Rect(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Rect.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Rect.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Rect.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Rect(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Rect;
}(FabricObject);

Rect.fromElement = function (element, options) {
  return fabric.fabric.Rect.fromElement(element, options);
};

Rect.fromObject = function (object) {
  return fabric.fabric.Rect.fromObject(object);
};

Rect.attribute = fabric.fabric.Rect.ATTRIBUTE_NAMES;
Rect.propTypes = Object.assign(FabricObject.propTypes, {
  rx: React.PropTypes.number,
  ry: React.PropTypes.number
});
Rect.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'rect',
  rx: 0,
  ry: 0,
  strokeDashArray: null
});

var Triangle = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Triangle, _FabricObject);

  function Triangle(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };
    _this.draw = _this.draw.bind(_assertThisInitialized(_this));

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Triangle.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.element instanceof Object) {
      object = fabric.fabric.Triangle.fromElement(this.props.element, this.props);
    } else if (this.props.object instanceof Object) {
      object = fabric.fabric.Triangle.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.Triangle(this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Triangle;
}(FabricObject);

Triangle.fromObject = function (object) {
  return fabric.fabric.Triangle.fromObject(object);
};

Triangle.propTypes = FabricObject.propTypes;
Triangle.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'triangle'
});

var Image = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Image, _FabricObject);

  function Image(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };

    _this.getElement = function () {
      return _this.state.object && _this.state.object.getElement();
    };

    _this.setElement = function (element, callback, options) {
      return _this.state.object && _this.state.object.setElement(element, callback, options);
    };

    _this.setCrossOrigin = function (value) {
      return _this.state.object && _this.state.object.setCrossOrigin(value);
    };

    _this.getOriginalSize = function () {
      return _this.state.object && _this.state.object.getOriginalSize();
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.getSrc = function () {
      return _this.state.object && _this.state.object.getSrc();
    };

    _this.setSrc = function (src, callback, options) {
      return _this.state.object && _this.state.object.setSrc(src, callback, options);
    };

    _this.toString = function () {
      return _this.state.object && _this.state.object.toString();
    };

    _this.clone = function (callback, propertiesToInclude) {
      return _this.state.object && _this.state.object.clone(callback, propertiesToInclude);
    };

    _this.applyFilters = function (callback, filters, imgElement, forResizing) {
      return _this.state.object && _this.state.object.applyFilters(callback, filters, imgElement, forResizing);
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Image.prototype;

  _proto.draw = function draw(cb) {
    var _this2 = this;

    if (typeof this.props.src === 'string') {
      fabric.fabric.Image.fromURL(this.props.src, function (instance) {
        return _FabricObject.prototype.draw.call(_this2, instance, cb);
      }, this.props);
    } else if (this.props.object instanceof Object) {
      fabric.fabric.Image.fromObject(this.props.object, function (instance) {
        return _FabricObject.prototype.draw.call(_this2, instance, cb);
      });
    } else if (this.props.element instanceof Object) {
      fabric.fabric.Image.fromElement(this.props.element, function (instance) {
        return _FabricObject.prototype.draw.call(_this2, instance, cb);
      }, this.props);
    } else {
      var instance = new fabric.fabric.Image(this.props.imgElement, this.props);

      _FabricObject.prototype.draw.call(this, instance, cb);
    }
  };

  return Image;
}(FabricObject);
Image.getSvgSrc = fabric.fabric.Image.prototype.getSrc;
Image.css = fabric.fabric.Image.CSS_CANVAS;

Image.fromObject = function (object, callback) {
  return fabric.fabric.Image.fromObject(object, callback);
};

Image.fromURL = function (url, callback, imgOptions) {
  return fabric.fabric.Image.fromURL(url, callback, imgOptions);
};

Image.fromElement = function (element, callback, options) {
  return fabric.fabric.Image.fromElement(element, callback, options);
};

Image.attribute = fabric.fabric.Image.ATTRIBUTE_NAMES;
Image.async = true;
Image.pngCompression = 1;
Image.propTypes = Object.assign(FabricObject.propTypes, {
  crossOrigin: React.PropTypes.oneOf(['', 'anonymous', 'use-credentials']),
  alignX: React.PropTypes.oneOf(['none', 'mid', 'min', 'max']),
  alignY: React.PropTypes.oneOf(['none', 'mid', 'min', 'max']),
  meetOrSlice: React.PropTypes.oneOf(['meet', 'slice'])
});
Image.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'image',
  crossOrigin: '',
  alignX: 'none',
  alignY: 'none',
  meetOrSlice: 'meet',
  strokeWidth: 0
});

var Text = /*#__PURE__*/function (_FabricObject) {
  _inheritsLoose(Text, _FabricObject);

  function Text(props, context) {
    var _this;

    _this = _FabricObject.call(this, props, context) || this;
    _this.state = {
      object: null
    };

    _this.toString = function () {
      return _this.state.object && _this.state.object.toString();
    };

    _this.isEmptyStyles = function () {
      return _this.state.object && _this.state.object.isEmptyStyles();
    };

    _this.renderf = function (ctx) {
      return _this.state.object && _this.state.object.render(ctx);
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    _this.toSVG = function (reviver) {
      return _this.state.object && _this.state.object.toSVG(reviver);
    };

    _this.complexity = function () {
      return 1;
    };

    return _this;
  }

  var _proto = Text.prototype;

  _proto.draw = function draw(cb) {
    var object;

    if (this.props.object instanceof Object) {
      object = fabric.fabric.Text.fromObject(this.props.object);
    } else if (this.props.element instanceof Object) {
      object = fabric.fabric.Text.fromElement(this.props.element, this.props);
    } else {
      object = new fabric.fabric.Text(this.props.text, this.props);
    }

    _FabricObject.prototype.draw.call(this, object, cb);
  };

  return Text;
}(FabricObject);
Text.attribute = fabric.fabric.Text.ATTRIBUTE_NAMES;
Text.defaultSvgFontSize = fabric.fabric.Text.DEFAULT_SVG_FONT_SIZE;

Text.fromElement = function (element, options) {
  return fabric.fabric.Text.fromElement(element, options);
};

Text.fromObject = function (object) {
  return fabric.fabric.Text.fromObject(object);
};

Text.propTypes = Object.assign(FabricObject.propTypes, {
  fontSize: React.PropTypes.number,
  fontWeight: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string]),
  fontFamily: React.PropTypes.string,
  textDecoration: React.PropTypes.oneOf(['', 'underline', 'overline', 'line-through']),
  textAlign: React.PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontStyle: React.PropTypes.oneOf(['', 'normal', 'italic', 'oblique']),
  lineHeight: React.PropTypes.number,
  textBackgroundColor: React.PropTypes.string
});
Text.defaultProps = Object.assign(FabricObject.defaultProps, {
  type: 'text',
  stateProperties: FabricObject.defaultProps.stateProperties.concat(['fontFamily', 'fontWeight', 'fontSize', 'text', 'textDecoration', 'textAlign', 'fontStyle', 'lineHeight', 'textBackgroundColor']),
  fontSize: 40,
  fontWeight: 'normal',
  fontFamily: 'Times New Roman',
  textDecoration: '',
  textAlign: 'left',
  fontStyle: '',
  lineHeight: 1.16,
  textBackgroundColor: '',
  stroke: null,
  shadow: null
});

var IText = /*#__PURE__*/function (_Text) {
  _inheritsLoose(IText, _Text);

  function IText(props, context) {
    var _this;

    _this = _Text.call(this, props, context) || this;
    _this.state = {
      object: null
    };

    _this.isEmptyStyles = function () {
      return _this.state.object && _this.state.object.isEmptyStyles();
    };

    _this.setSelectionStart = function (index) {
      return _this.state.object && _this.state.object.setSelectionStart(index);
    };

    _this.setSelectionEnd = function (index) {
      return _this.state.object && _this.state.object.setSelectionEnd(index);
    };

    _this.getSelectionStyles = function () {
      return _this.state.object && _this.state.object.getSelectionStyles();
    };

    _this.setSelectionStyles = function (styles) {
      return _this.state.object && _this.state.object.setSelectionStyles(styles);
    };

    _this.renderCursorOrSelection = function () {
      return _this.state.object && _this.state.object.renderCursorOrSelection();
    };

    _this.get2DCursorLocation = function (selectionStart) {
      return _this.state.object && _this.state.object.get2DCursorLocation(selectionStart);
    };

    _this.getCurrentCharStyle = function (lineIndex, charIndex) {
      return _this.state.object && _this.state.object.getCurrentCharStyle(lineIndex, charIndex);
    };

    _this.getCurrentCharFontSize = function (lineIndex, charIndex) {
      return _this.state.object && _this.state.object.getCurrentCharFontSize(lineIndex, charIndex);
    };

    _this.getCurrentCharColor = function (lineIndex, charIndex) {
      return _this.state.object && _this.state.object.getCurrentCharColor(lineIndex, charIndex);
    };

    _this.renderCursor = function (boundaries, ctx) {
      return _this.state.object && _this.state.object.renderCursor(boundaries, ctx);
    };

    _this.renderSelection = function (chars, boundaries, ctx) {
      return _this.state.object && _this.state.object.renderSelection(chars, boundaries, ctx);
    };

    _this.toObject = function (propertiesToInclude) {
      return _this.state.object && _this.state.object.toObject(propertiesToInclude);
    };

    return _this;
  }

  var _proto = IText.prototype;

  _proto.draw = function draw(canvas) {
    var object;

    if (this.props.object instanceof Object) {
      object = fabric.fabric.IText.fromObject(this.props.object);
    } else {
      object = new fabric.fabric.IText(this.props.text, this.props);
    }

    _Text.prototype.draw.call(this, canvas, object);
  };

  _proto.initEvent = function initEvent() {
    var object = this.state.object;
    if (!(object instanceof fabric.fabric.Object)) return;

    _Text.prototype.initEvent.call(this);

    if (this.props.onChanged instanceof Function) {
      object.on("changed", this.props.onChanged);
    }

    if (this.props.onSelectionChanged instanceof Function) {
      object.on("selection:changed", this.props.onSelectionChanged);
    }

    if (this.props.onEditingEntered instanceof Function) {
      object.on("editing:entered", this.props.onEditingEntered);
    }

    if (this.props.onEditingExited instanceof Function) {
      object.on("editing:exited", this.props.onEditingExited);
    }
  };

  _proto.eventChanged = function eventChanged(nextProps) {
    var object = this.state.object;
    if (!(object instanceof fabric.fabric.Object)) return;

    _Text.prototype.eventChanged.call(this, nextProps);

    if (this.props.onChanged && !nextProps.onChanged) {
      object.off("changed");
    } else if (nextProps.onChanged instanceof Function) {
      object.on("changed", this.props.onChanged);
    }

    if (this.props.onSelectionChanged && !nextProps.onSelectionChanged) {
      object.off("selection:changed");
    } else if (nextProps.onSelectionChanged instanceof Function) {
      object.on("selection:changed", this.props.onSelectionChanged);
    }

    if (this.props.onEditingEntered && !nextProps.onEditingEntered) {
      object.off("editing:entered");
    } else if (nextProps.onEditingEntered instanceof Function) {
      object.on("editing:entered", this.props.onEditingEntered);
    }

    if (this.props.onEditingExited && !nextProps.onEditingExited) {
      object.off("editing:exited");
    } else if (nextProps.onEditingExited instanceof Function) {
      object.on("editing:exited", this.props.onEditingExited);
    }
  };

  return IText;
}(Text);

IText.fromObject = function (object) {
  return fabric.fabric.IText.fromObject(object);
};

IText.propTypes = Object.assign(Text.propTypes, {
  selectionStart: React.PropTypes.number,
  selectionEnd: React.PropTypes.number,
  selectionColor: React.PropTypes.string,
  isEditing: React.PropTypes.bool,
  editable: React.PropTypes.bool,
  editingBorderColor: React.PropTypes.string,
  cursorWidth: React.PropTypes.number,
  cursorColor: React.PropTypes.string,
  cursorDelay: React.PropTypes.number,
  cursorDuration: React.PropTypes.number,
  styles: React.PropTypes.object,
  caching: React.PropTypes.bool
});
IText.defaultProps = Object.assign(Text.defaultProps, {
  type: "i-text",
  selectionStart: 0,
  selectionEnd: 0,
  selectionColor: "rgba(17,119,255,0.3)",
  isEditing: false,
  editable: true,
  editingBorderColor: "rgba(102,153,255,0.25)",
  cursorWidth: 2,
  cursorColor: "#333",
  cursorDelay: 1000,
  cursorDuration: 600
});

var BaseFilter = fabric.fabric.Image.filters.BaseFilter;
var Brightness = fabric.fabric.Image.filters.Brightness;
var Convolute = fabric.fabric.Image.filters.Convolute;
var GradientTransparency = fabric.fabric.Image.filters.GradientTransparency;
var Grayscale = fabric.fabric.Image.filters.Grayscale;
var Invert = fabric.fabric.Image.filters.Invert;
var Mask = fabric.fabric.Image.filters.Mask;
var Multiply = fabric.fabric.Image.filters.Multiply;
var Noise = fabric.fabric.Image.filters.Noise;
var Pixelate = fabric.fabric.Image.filters.Pixelate;
var RemoveWhite = fabric.fabric.Image.filters.RemoveWhite;
var Resize = fabric.fabric.Image.filters.Resize;
var Sepia = fabric.fabric.Image.filters.Sepia;
var Sepia2 = fabric.fabric.Image.filters.Sepia2;
var Tint = fabric.fabric.Image.filters.Tint;

var _imageFilter = {
  __proto__: null,
  BaseFilter: BaseFilter,
  Brightness: Brightness,
  Convolute: Convolute,
  GradientTransparency: GradientTransparency,
  Grayscale: Grayscale,
  Invert: Invert,
  Mask: Mask,
  Multiply: Multiply,
  Noise: Noise,
  Pixelate: Pixelate,
  RemoveWhite: RemoveWhite,
  Resize: Resize,
  Sepia: Sepia,
  Sepia2: Sepia2,
  Tint: Tint
};

var _color = fabric.fabric.Color;

var reactFabric = {
  StaticCanvas: StaticCanvas,
  Canvas: Canvas,
  Circle: Circle$1,
  Ellipse: Ellipse,
  Line: Line,
  Path: Path,
  PathGroup: PathGroup,
  Polygon: Polygon,
  Polyline: Polyline,
  Rect: Rect,
  Triangle: Triangle,
  Image: Image,
  Text: Text,
  Itext: IText,
  imageFilter: _imageFilter,
  color: _color
};
var StaticCanvas$1 = StaticCanvas;
var Canvas$1 = Canvas;
var Circle$2 = Circle$1;
var Ellipse$1 = Ellipse;
var Line$1 = Line;
var Path$1 = Path;
var PathGroup$1 = PathGroup;
var Polygon$1 = Polygon;
var Polyline$1 = Polyline;
var Rect$1 = Rect;
var Triangle$1 = Triangle;
var Image$1 = Image;
var Text$1 = Text;
var Itext = IText;
var imageFilter = _imageFilter;
var color = _color;

exports.Canvas = Canvas$1;
exports.Circle = Circle$2;
exports.Ellipse = Ellipse$1;
exports.Image = Image$1;
exports.Itext = Itext;
exports.Line = Line$1;
exports.Path = Path$1;
exports.PathGroup = PathGroup$1;
exports.Polygon = Polygon$1;
exports.Polyline = Polyline$1;
exports.Rect = Rect$1;
exports.StaticCanvas = StaticCanvas$1;
exports.Text = Text$1;
exports.Triangle = Triangle$1;
exports.color = color;
exports.default = reactFabric;
exports.imageFilter = imageFilter;
//# sourceMappingURL=main.js.map
