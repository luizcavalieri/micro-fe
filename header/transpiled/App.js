'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// class App extends Component {
//     render() {
//         return (
//             <header>
//                 <h1>Logo</h1>
//                 <nav>
//                     <ul>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </nav>
//             </header>
//         );
//     }
// }
//
// export default App;


exports.default = function () {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Logo'
        ),
        _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    'About'
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    'Contact'
                )
            )
        )
    );
};