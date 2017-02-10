var React=require("react");

var Acomp=React.createClass({
    afun:function(){
        console.log("enter");
    },
    render:function () {
        return (
            <div>
                <div ref="div1" className="button">1</div>
                <input value="不好" ref="input1"/>
                <span>1</span>
            </div>
        );
    }
});

module.exports=Acomp;