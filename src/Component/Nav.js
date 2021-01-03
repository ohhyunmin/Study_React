import React, {Component} from 'react';

class Nav extends Component{
  /*shouldComponentUpdate 의 인자는 props 와 state 값이 변경되었을때의 값이며, return false 일 시 render() 함수를 실행하지 않는다. 주로 concat 함수와 같이 원본은 변하지 않을 때 원본데이터에 변화가 있는지 확인하기 위해 사용된다.
  shouldComponentUpdate(newProps, newState){
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }*/
    render(){
        var lists = [];
        var data = this.props.nav;
        var i = 0;
        while(i<data.length){
            lists.push(
              <li key={data[i].id}>
                <a href={"/Nav/"+data[i].id}
                  /* 
                    data-id={data[i].id}
                    //e.target 의 dataset 에 data-id 의 data-를 제외한 id 값이 e.target 의 dataset 의 id 에 담기고 이 값을 e.target.dataset.id 이렇게 불러서 사용할 수 있다.
                    onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage(e.target.dataset.id);
                  }.bind(this}>
                  */
                   onClick={function(id, e){
                  e.preventDefault();
                  this.props.onChangePage(id);
                }.bind(this, data[i].id)}>
                  {data[i].title}</a>
              </li>
              )
            i = i + 1;
        }
      return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
  }

  export default Nav;