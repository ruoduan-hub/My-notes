import React from 'react';



class OtherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <>
                <h3>这个组件要被异步加载到home</h3>
            </>
        );
    }
}

export default OtherComponent;