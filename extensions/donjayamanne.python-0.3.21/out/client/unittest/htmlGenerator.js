"use strict";
var contracts_1 = require('./contracts');
function generateErrorView(message, error) {
    var errorDetails = '';
    if (error && typeof error === 'object') {
        var ex = error;
        errorDetails = ex.message + "\n" + ex.stack;
    }
    if (typeof error === 'string') {
        errorDetails = error + '';
    }
    return "\n            <style>\n            .message, .details {\n                color:red;\n            }\n            .message {\n                font-weight:bold;\n            }\n            </style>\n            <body>\n                <div class=\"message\">" + message + "</div><br/>\n                <div class=\"details\">" + errorDetails + "</details>\n            </body>";
}
exports.generateErrorView = generateErrorView;
function generateTestExplorerHtmlView(tests, currentStatus) {
    var htmlForAllTestFiles = tests.reduce(function (html, testFile) { return html + generateHtmlForTestFileSuite(testFile); }, '');
    return "\n        <div>\n            <ol class=\"ts-tree \" id=\"\">\n                " + htmlForAllTestFiles + "\n            </ol>\n        </div>\n        ";
}
exports.generateTestExplorerHtmlView = generateTestExplorerHtmlView;
function generateDiscoveringHtmlView() {
    return "\n        <style>" + exports.DISCOVER_STYLES + "<style>\n        <div class =\"container\">\n            <div>Discovering Unit Tests</div>\n            <div class=\"spinner\">\n                <div class=\"rect1\"></div>\n                <div class=\"rect2\"></div>\n                <div class=\"rect3\"></div>\n                <div class=\"rect4\"></div>\n                <div class=\"rect5\"></div>\n            </div>\n        </div>\n        ";
}
exports.generateDiscoveringHtmlView = generateDiscoveringHtmlView;
function generateHtmlForMenu(currentStatus) {
    var runTestsMenu = "<a href=\"" + encodeURI('command:python.runAllUnitTests') + "\">Run all UnitTests</a>";
    return "\n            <div>\n                <span class=\"dropdown\">\n                    <span>&nbsp;[Unit Test Options]</span>\n                    <div class=\"dropdown-content\">\n                        " + (currentStatus !== contracts_1.TestStatus.Error ? runTestsMenu : '') + "\n                        <a href=\"" + encodeURI('command:python.discoverUnitTests') + "\">Re-discover UnitTests</a>\n                    </div>                \n                </span>                    \n            </div>\n            ";
}
exports.generateHtmlForMenu = generateHtmlForMenu;
function generateHtmlForTestFileSuite(testFileSuite) {
    var functionHtml = testFileSuite.functions.reduce(function (html, fn) { return html + generateHtmlForTestFunction(fn); }, '');
    var childTestHtml = testFileSuite.suites.reduce(function (html, fn) { return html + generateHtmlForTestFileSuite(fn); }, '');
    // The property isInstance only exists on the TestSuite class and not TestFile
    var testType = testFileSuite.isInstance ? 'suite' : 'file';
    return "\n            <li>\n                <label for=\"" + encodeURIComponent(testFileSuite.rawName) + "\" \n                        title=\"" + (testFileSuite.message ? testFileSuite.message : '') + "\" \n                        class=\"parentNode\">\n                        " + testFileSuite.name + "\n                        <span class=\"dropdown\">\n                            <span>&nbsp;[Test]</span>\n                            <div class=\"dropdown-content\">\n                                <a href=\"" + encodeURI('command:python.runUnitTest?' + JSON.stringify([testType, testFileSuite.rawName])) + "\">Run this test</a>\n                            </div>                \n                        </span>                    \n                </label>\n                <input type=\"checkbox\" id=\"" + encodeURIComponent(testFileSuite.rawName) + "\">\n                <ol>\n                    " + functionHtml + "\n                    " + childTestHtml + "\n                </ol>\n            </li>\n            ";
}
function generateHtmlForTestFunction(testFunction) {
    // <li class="ts-file "><a class="added-async-link another-class" id="file3" title="this is a file link" href="#mainlink">File Main 3</a></li>
    return "\n            <li class=\"ts-file \">\n                <label class=\"added-async-link another-class\" \n                    id=\"" + encodeURIComponent(testFunction.rawName) + "\" \n                    title=\"" + (testFunction.message ? testFunction.message : '') + "\">\n                    " + testFunction.name + "\n                    <span class=\"dropdown\">\n                        <span>&nbsp;[Test]</span>\n                        <div class=\"dropdown-content\">\n                            <a href=\"" + encodeURI('command:python.runUnitTest?' + JSON.stringify(['function', testFunction.rawName])) + "\">Run this test</a>\n                        </div>                \n                    </span>                    \n                </label>\n            </li>\n            ";
}
exports.DISCOVER_STYLES = "\n    .container {\n        margin: 100px auto;\n        height: 40px;\n        text-align: center;\n        font-size:1.5em;\n    }\n    .spinner {\n        margin: 0px auto;\n        width: 50px;\n        height: 40px;\n        text-align: center;\n        font-size: 10px;\n    }\n\n    .spinner > div {\n        background-color: #333;\n        height: 100%;\n        width: 6px;\n        display: inline-block;\n        \n        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n        animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    }\n\n    .spinner .rect2 {\n        -webkit-animation-delay: -1.1s;\n        animation-delay: -1.1s;\n    }\n\n    .spinner .rect3 {\n        -webkit-animation-delay: -1.0s;\n        animation-delay: -1.0s;\n    }\n\n    .spinner .rect4 {\n        -webkit-animation-delay: -0.9s;\n        animation-delay: -0.9s;\n    }\n\n    .spinner .rect5 {\n        -webkit-animation-delay: -0.8s;\n        animation-delay: -0.8s;\n    }\n\n    @-webkit-keyframes sk-stretchdelay {\n        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n        20% { -webkit-transform: scaleY(1.0) }\n    }\n\n    @keyframes sk-stretchdelay {\n        0%, 40%, 100% { \n            transform: scaleY(0.4);\n            -webkit-transform: scaleY(0.4);\n        }  20% { \n            transform: scaleY(1.0);\n            -webkit-transform: scaleY(1.0);\n        }\n    }\n";
var PYTHON_IMAGE_URL = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4AgFAg4GqVpWBAAAAy9JREFUWMPt10toHlUUB/DfzPc1SVMroQlVY/AZpFJqRbGVasFlfGG7UBR3RRca8YEbqahQl7ooboSCbkQQ1BJclUoUX4GgTZWCUtFaRFAk1mg172+ui5k0k/km+QYT0EX/uztz5pz/Ped/z7nDefzHiKoa7nx+YsH+EtyIrbgINfyOb/EFvsf86IGutSOQBe/EQ3gU/VngPBL8jHfxEn6CVkTiisHhMTyHjzGMUOLrUjyOg7igyuZaEsiwAXvwOR7BfkysYH8brqriuF6RQJzZbsX92NZihzWsW0sCMIM+HMoCBMxmgSqLuYimD7Oa19GDthzRm7HJ0tp34glp7fOYuHj9r3cODdx9emZqc10q0HFMQ8euT8ozkFP703gQHbmADc3Cq2VEl6AR4sZdfUe3z093H5KWKsGIVDs/To/sPkeiXggOD+BZtP/btBIlnfXJ9iC63KJWrsQUBqWlQ/Mp6MK+1QUHsxvqk/Ml/vdie/5B0WCLVOmrQhKib67fdKIjhKij8Kobt8L0yO5SAv24cDXBG6F2+pbNo2/3dv6yN4jK+sy1+UXxGHZb/kiFRohPRXwZR8lZhEgIQZQEUYMQ2uK5s/ddNnRycMtre5IQ71rGT7dUvI0yAssh4PAz2145MtA7fF09nt+IOBIiqcKJiCVXB9G9SYivqJqxIoHxLNiSLCQhHju4Y//wjp6xFxqh1rfIKmcWaDTNp1L8trB7mjXwHf4sftFZnzx2U8/x2/PBV4Gv84sigZM4Ucx9e212LhK61iD4OD5lsRsWCUzgdVnLTBGJJUH1ybkSDuOr/INzGhg90LXQDd9Cr8VWHNeixhmistORSC8e0yXvaha1FPAZXsRc3mi5YVSTHpe22WSdff1veviaN97BzoL5FF6WaifO+ZvDGP7IniU4o2QYtRyjWcfaiPdLCCyM5CRbz2RZm8AdOJ4PVobV1jWSzo31OCodZB9Ib1CVfFclkGS7Wwkf4gg+kpZgtpVTqnfCv/Ge9FLStozNoHSYDWRZ+GFNMpCr4at4StonyrLRj3swhCfxVxUCle9ymRgj6c/IDcp/TI7hFBqtxHce/xv8A/Mv5tF2XUuzAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA4LTA1VDAyOjE0OjA2LTA0OjAw6aJOXQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wOC0wNVQwMjoxNDowNi0wNDowMJj/9uEAAAAASUVORK5CYII=')";
exports.TREE_STYLES = "\n    <style>\n        .dropdown {\n            position: relative;\n            display: inline-block;\n        }\n\n        .dropdown-content {\n            display: none;\n            position: absolute;\n            background-color: #f9f9f9;\n            min-width: 160px;\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            z-index:999;\n        }\n\n        .dropdown-content a {\n            color: black;\n            padding: 12px 16px;\n            text-decoration: none;\n            display: block;\n            white-space:nowrap;\n        }\n\n        .dropdown-content a:hover {background-color: #f1f1f1}\n\n        .dropdown:hover .dropdown-content {\n            display: block;\n        }\n\n        ol.ts-tree {\n            padding: 0 0 0 1.5em;\n        }\n        \n        ol.ts-tree body,\n        ol.ts-tree form,\n        ol.ts-tree ul,\n        ol.ts-tree li,\n        ol.ts-tree p,\n        ol.ts-tree h1,\n        ol.ts-tree h2,\n        ol.ts-tree h3,\n        ol.ts-tree h4,\n        ol.ts-tree h5 {\n            margin: 0;\n            padding: 0;\n        }\n        \n        ol.ts-tree img {\n            border: none;\n        }\n        \n        ol.ts-tree p {\n            margin: 0 0 1em 0;\n        }\n        \n        ol.ts-tree li {\n            position: relative;\n            margin:5px 0px 5px 0px;\n            margin-left: -1.5em;\n            list-style: none;\n            list-style-type: none;\n        }\n        ol.ts-tree li.ts-file a{\n            display:inline-block;\n        }        \n        ol.ts-tree li.ts-file a, ol.ts-tree li.ts-file label {\n            display: block;\n            padding-left: 1.3em;\n            background-position:0;            \n            background-size: 1.2em;\n            text-decoration: none;\n            display: block;\n        }\n        \n        ol.ts-tree li.ts-file a.class {\n            background: url(../img/icons/classIcon.svg) 0 0 no-repeat;\n        }\n        \n        ol.ts-tree li input {\n            position: absolute;\n            left: 0;\n            margin-left: 0;\n            opacity: 0;\n            z-index: 2;\n            cursor: pointer;\n            height: 1em;\n            width: 1em;\n            top: 0;\n        }\n        \n        ol.ts-tree li input + ol > li {\n            /* Lets disable the expanding/collapsing feature for now */\n            /* display: none; */\n            display: block;\n            margin-left: -14px !important;\n            padding-left: 1px;\n        }\n        \n        ol.ts-tree li label {\n            cursor: pointer;\n            display: block;\n            padding-left: 1.3em;\n        }\n        \n        ol.ts-tree li label.parentNode {\n            background: " + PYTHON_IMAGE_URL + " 0 0.25em no-repeat;\n            background-position:0;            \n            background-size: 1.2em;\n        }\n        \n        ol.ts-tree li input:checked + ol > li {\n            /* Lets disable the expanding/collapsing feature for now */\n            /* display: block; */\n        }\n        \n        ol.ts-tree li input:checked + ol > li:last-child {\n        }\n        \n        ol.ts-tree.ts-tree-no-icon li.ts-file a {\n            background: none;\n            padding-left: 0;\n        }\n        \n        ol.ts-tree.ts-tree-no-icon li label {\n            background: none;\n            padding-left: 0;\n        }\n    </style>\n";
//# sourceMappingURL=htmlGenerator.js.map