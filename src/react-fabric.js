import _StaticCanvas from './StaticCanvas.jsx';
import _Canvas from './Canvas.jsx';

import _Image from './Image.jsx';
import _Text from './Text.jsx';
import _Itext from './IText.jsx';

import * as _imageFilter from './ImageFilters.js';
import _color from './Color.js';

// Main Bundle
export default {
	StaticCanvas: _StaticCanvas,
	Canvas: _Canvas,
	Image: _Image,
	Text: _Text,
	Itext: _Itext,

	imageFilter: _imageFilter,
	color: _color
}
