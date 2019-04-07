import React from 'react';
import '../assets/css/index.css'
import Storage from '../models/storage'

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: []
         };
    }

    addData = (e) =>{
        if (e.keyCode === 13) {
            let title = e.target.value
            let temlist = this.state.list

            temlist.push(
                {
                    title: title,
                    checked: false
                }
            )

            this.setState({
                list: temlist
            })
            e.target.value = ""
            //执行缓存数据
            // localStorage.setItem('ToDoList', JSON.stringify(temlist))
            Storage.set('ToDoList', temlist)
        } 
    }

    chenckBoxChange = (val, key) =>{
        console.log(val, key)
        let list = this.state.list
        list[key].checked = !list[key].checked

        this.setState({
            list:list
        })
        Storage.set('ToDoList', list)
    }
   
    removeList = (key) =>{
        let list = this.state.list
        list.splice(key, 1)
        this.setState({
            list: list
        })

        Storage.set('ToDoList', list)
    }

    componentDidMount () {
        //获取缓存数据
        let list = Storage.get('ToDoList')
        if (list) {
            this.setState({
                list: list
            })
        }
    }
 
    render() {
        return (
            <div>
                <h3>ToDoList</h3>
                <input ref="userData"  type="text" onKeyUp={this.addData} />
                <hr/>  

                <h2>待办事宜</h2>
                    <ul>
                        {
                            this.state.list.map((val, key)=>{
                                if (!val.checked) {
                                    return (
                                        <li key={key}>
                                            <input type="checkbox" checked={ val.checked } onChange={this.chenckBoxChange.bind(this, val, key)} />
                                            { val.title }
                                            ---<button onClick={this.removeList.bind(this, key)}>删除</button>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>



                <h2>已办事宜</h2>
                <ul>
                    {
                        this.state.list.map((val, key)=>{
                            if (val.checked) {
                                return (
                                    <li key={ key }>
                                        <input type="checkbox" defaultChecked={ val.checked } onClick={this.chenckBoxChange.bind(this, val, key)} />
                                        { val.title }
                                        ---<button onClick={this.removeList.bind(this, key)}>删除</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                

            </div>
        );
    }
}

export default ToDoList;