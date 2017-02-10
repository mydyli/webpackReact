var Acop=require("./com.js");
var React=require("react");
var  ReactDom=require("react-dom");
var ReactTest=require("react/addons");


var TestUtil=ReactTest.addons.TestUtils;


describe("a react test",function () {
    xit("js测试",function(){
        expect("123").toContain("1");
    });

    xit("react测试",function(){
        var doms=TestUtil.renderIntoDocument(<Acop/>);
        expect(React.findDOMNode(doms).textContent).toContain("1");
    });

    
    
    xit(" Shallow Rendering 浅渲染",function(){
        var renderer = TestUtil.createRenderer();
        renderer.render(<Acop/>);
        var  app= renderer.getRenderOutput();
        console.log(app.props.children);
        console.log(app.props.children[0].props.className);
        expect(app.props.children[0].type).toEqual('div');
        
    });
    
    
    
    
    
    it("react测试",function(){
        var doms=TestUtil.renderIntoDocument(<Acop/>);
        expect(doms.refs.input1.getDOMNode().value).toEqual("不好de");
    });




});

//

// var todoItems = TestUtil.scryRenderedDOMComponentsWithTag(doms, 'div');
// var todoLength = todoItems.length;
//
// var deleteButton = todoItems[0];
//
// var alldoms=doms.refs.div1.getDOMNode();