import React from 'react';
import { connect } from 'react-redux';
import { increaseNumber } from './actions/action';
import { declareNumber } from './actions/action';
import { oddNunber } from './actions/action';
import { add } from './actions/action';
import { showAll } from './actions/action';
import { deleteThisOne } from './actions/action';
function mapStateToProps(state, ownProps) {
    console.log("mapStateToProps",state.an.result);
    console.log("addName",state.an.addName);
    return {
        number: state.re.number,
        //first: state.re.first,
        result: state.an.result,
        addName: state.an.addName
    }
    //console.log(state.result);
}
function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch(increaseNumber),
        declare: () => dispatch(declareNumber),
        slowDeclare: () => setTimeout(() => dispatch(declareNumber), 1000),
        oddIncrease: () => dispatch(oddNunber),
        changeName: (e) => dispatch(add(e.target.value)),
        showName: () => dispatch(showAll),
        deleteThis: (id) => dispatch(deleteThisOne(id))
    }
}
class Simple extends React.Component {
    render() {
        const { number, result, addName,increase, declare, slowDeclare, oddIncrease, changeName, showName ,deleteThis } = this.props;
        console.log("simple",result);
        return (
            <div>
                <div>
                    <h2>{number}</h2>
                    <input type="button" onClick={increase} value="增加" />
                    <input type="button" onClick={declare} value="减少" />
                    <input type="button" onClick={slowDeclare} value="缓慢减少" />
                    <input type="button" onClick={oddIncrease} value="次数为奇数时增加" />
                </div>
                <br></br>
                <div>
                    <input type="text" placeholder="请输入具体数据" onChange={changeName} value={addName || ''}/>
                    <input type="submit" value="添加" onClick={showName} />
                    <div>{result.map((item, index) => (<li key={index}>{item}&nbsp;{index}<input type="button" value="删除" id={index} onClick={()=>{deleteThis(index)}} /></li>))}</div>
                </div>
            </div>
        )
    }
}
const SimpleContainer = connect(mapStateToProps, mapDispatchToProps)(Simple)
export default SimpleContainer;