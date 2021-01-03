import React, {Component} from 'react';
import './App.css';
import Nav from './Component/Nav';
import Article from './Component/Article';

/*
아래의 코드가 Component 를 만드는 것 입니다.
App 이라는 Class 를 만들고 React 의 Component 를 상속하고, 
render() 라는 메소드를 가지고 있다.
(Class 안에는 function 을 생략한다 => function render() => render())
컴포넌트를 만들때는 반드시 하나의 최상위 태그로 시작해야한다. => <div className="App">


render 메소드가 실행 전 constructor 가 있다면 props 를 초기화한다.

this.state = {
      subject:{title:'WEB', sub:'"World Wide Web!'}
    }
를 작성해줌으로써 title 과 sub 값을 설정해준다.

props 나 state 의 값이 바뀌면 해당되는 컴포넌트의 render 메소드가 실행된다.
*/
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB', sub:'"World Wide Web!'},
      welcome:{title:'Welcome', desc:'Welcome react'},
      navs:[
        {id:1, title:'HTML', desc:'HTML is Good'},
        {id:2, title:'CSS', desc:'CSS is Good'},
        {id:3, title:'JAVASCRIPT', desc:'JAVASCRIPT is Good'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if(this.state.mode === 'welcome')
    {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode ==='read'){
      var i = 0;
      while(i < this.state.navs.length)
      {
        var data = this.state.navs[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }
    }
    return(
      <div className="App">
        {
          /*
            Subject 객체에 title, sub 와 onChangePage 라는 
            사용자 정의 함수를 만들고 Subject Class 에서
            a 태그 클릭 시  this.props.onChangePage(); 사용자 정의 함수를 실핸한다.

          */
        }
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}
          >
          </Subject>

        {/* 클릭 이벤트를 이용한 state 변환
        <header>
          <h1><a href="/" onClick={function(e) {
            //e.preventDefault(); 는 이벤트 발생 시 페이지를 리로드하지 않는다.
            e.preventDefault();
            //setState 는 State 내부의 값을 바꾸는데에 사용된다.
            //이벤트 설치 시 함수 내부의 this 는 아무 값도 아니다.
            //.bind(this) 를 붙여줌으로써 this 를 bind 한다. => 여기서 this 는 Class App 이다.
            this.setState({
              //this.state.mode = 'welcome';
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}  
        </header>
        */}
        <Nav 
        nav={this.state.navs}
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        ></Nav>
        <Article title={_title} Content={_desc}></Article>
      </div>
    );
  }
}

/*
{this.props.title}, {this.props.sub} 의 문법은 jsx 라는 페이스북에서 만든 문법이며, title 과 sub 는 <Subject title="WEB" sub="World Wide Web!"></Subject> 의 title 과 sub 이다. 클래스의 객체에 값을 셋팅하는 방식
*/
class Subject extends Component {
  render(){
    return(
      <header>
        <h1><a href="/" onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }.bind(this)}>{this.props.title}</a></h1>
        {this.props.sub}
    </header>
    );
  }
}

export default App;
