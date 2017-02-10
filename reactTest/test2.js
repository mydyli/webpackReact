var Acop=require("./com.js");
var Acop2=require("./com2.js");
var React=require("react");
var ReactTest=require("react/addons");

var TestUtil=ReactTest.addons.TestUtils;

describe("a react test",function () {
    it("afun test",function(){
        var doms=TestUtil.renderIntoDocument(<Acop/>);
        expect(React.findDOMNode(doms).textContent).toContain("1");
    });

    it("afun test 2",function(){
        var doms2=TestUtil.renderIntoDocument(<Acop2/>);
        expect(React.findDOMNode(doms2.refs.duanluo).textContent).toEqual("段落");
    });

});