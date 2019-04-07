import React from 'react'

class ReactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            masg: 'React表单',
            name: '',
            citys:[  
                '北京','上海','深圳'            
            ],
            hobby:[   
                {  
                    'title':"睡觉",
                    'checked':true
                },
                {  
                    'title':"吃饭",
                    'checked':false
                },
                {  
                    'title':"敲代码",
                    'checked':true
                }
            ],
            info: '',
            sex: '',
            sex: '1',
            city: ''
         };
    }

    handelname = (e) =>{
        let name = e.target.value
        this.setState({
            name: name
        })
    }

    headersex = (e) =>{
        this.setState({
            sex: e.target.value
        })
    }

    handelCity = (e) =>{
        this.setState({
            city: e.target.value
        })
    }
    handelHobby = (key) =>{
        let hobby = this.state.hobby
        hobby[key].checked = ! hobby[key].checked
        this.setState({
            hobby: hobby
        })

    }
    headelInfo = (e) =>{
        this.setState({
            info: e.target.value
        })
    }
    headelSubmit = (e) =>{
        e.preventDefault()//阻止默认事件
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);
    }

    render() {
        return (
           <div>
               <h3>{ this.state.masg }</h3>

                <form onSubmit={this.headelSubmit}>
                    <label>
                        姓名: 
                        <input type='text' value={this.state.name} onChange={this.handelname} />
                    </label>
                    <br />
                    <label>
                        <input value='1' checked={this.state.sex == 1} onChange={this.headersex} type="radio" /> 男
                        <input value='2' checked={this.state.sex == 2} onChange={this.headersex} type="radio" /> 女
                    </label>
                    <br />

                    <label>居住城市：
                        <select value={this.state.city} onChange={this.handelCity} name="" id="">
                            {
                                this.state.citys.map(
                                    (val,key) => <option key={key} >{val}</option>
                                    )
                            }
                        </select>
                    </label>
                            <br />
                    <label> 爱好：
                        {
                            this.state.hobby.map(
                                (val, key) => (
                                    <span key={key}>
                                        <input type="checkbox" checked={val.checked} onChange={this.handelHobby.bind(this, key)} name="" id=""/> {val.title}
                                    </span>
                                )
                                )
                        }
                    </label>

                    <br />

                    <label> 备注： 
                        <textarea value={this.state.info} onChange={this.headelInfo} name="" id="" cols="30" rows="10">
                        
                        </textarea>

                    </label>
                    
                    <br />
                    <input type="submit"  defaultValue='提交' />
                </form>

           </div> 
        );
    }
}

export default ReactForm;

