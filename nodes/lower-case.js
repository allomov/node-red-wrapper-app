module.exports = function(RED) {
    function LowerCaseNode(config) {
    	console.log("VBBBAAA!!!")
        RED.nodes.createNode(this,config);
        var node = this;
        this.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });
    }
    RED.nodes.registerType("lower-case",LowerCaseNode);
}
