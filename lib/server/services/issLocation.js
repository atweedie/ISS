'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIssLoc() {
    var url = 'http://api.open-notify.org/iss-now.json';
    return (0, _nodeFetch2.default)(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        return json.iss_position;
    });
}

exports.default = getIssLoc;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2ZXIvc2VydmljZXMvaXNzTG9jYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0SXNzTG9jIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImlzc19wb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztBQUVBLFNBQVNBLFNBQVQsR0FBcUI7QUFDakIsUUFBTUMsTUFBTSx5Q0FBWjtBQUNBLFdBQU8seUJBQU1BLEdBQU4sRUFDRkMsSUFERSxDQUNHLG9CQUFZO0FBQ2QsZUFBT0MsU0FBU0MsSUFBVCxFQUFQO0FBQ0gsS0FIRSxFQUlGRixJQUpFLENBSUcsZ0JBQVE7QUFDVixlQUFPRSxLQUFLQyxZQUFaO0FBQ0gsS0FORSxDQUFQO0FBT0g7O2tCQUVjTCxTIiwiZmlsZSI6Imlzc0xvY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xyXG5cclxuZnVuY3Rpb24gZ2V0SXNzTG9jKCkge1xyXG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9hcGkub3Blbi1ub3RpZnkub3JnL2lzcy1ub3cuanNvbidcclxuICAgIHJldHVybiBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oanNvbiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBqc29uLmlzc19wb3NpdGlvblxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRJc3NMb2M7Il19