import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg: 'footer的数据'
         };
    }

    render() {
        return (
            <div>
                <hr />
                <h3>底部组件</h3>
            </div>
        );
    }
}

export default Footer;