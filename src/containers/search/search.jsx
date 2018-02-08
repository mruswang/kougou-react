import React, { Component } from 'react';
import WrappedComponent from '../../hoc/index'
import $http from '../../axios'
import { Form, Icon, Input, Button, List } from 'antd';
import './search.css'


const FormItem = Form.Item;


const Item = List.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class Search extends Component {
	constructor(props){
    super(props);
    this.state = {
      songlist: []
    }
  }
  componentDidMount(){
    this.props.form.validateFields();
  }
  back(){
    window.history.back()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        $http.get('/sproxy/search/song?format=json',{
            params:{
                keyword:values,
                page: 1,
                pagesiez:20,
                showtype: 1
            }
        }).then(res => {
          console.log(res.data)
          this.setState({
            songlist: res.data.data.info
          })
        })
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    let songlist = this.state.songlist && this.state.songlist.map((item,index) => (
      <Item className="list-item" key={index} onClick={this.props.play.bind(this,this.state.songlist,item.hash,index)}>
        <span>{item.filename}</span>
      </Item>
    ))
    return (
      <div className="singer-list">
        <div className="top">
          <Icon type="left" onClick={this.back}/>
          <span>搜索</span>
        </div>
        <Form className="search-box" layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入歌手/歌名/拼音' }],
            })(
              <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="歌手/歌名/拼音" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              disabled={hasErrors(getFieldsError())}
            >
              搜索
            </Button>
          </FormItem>
        </Form>
        <List className={this.props.smallScreen ? 's-list mbh': 's-list mbn'}>
          {songlist}
        </List>
      </div>
      
    );
  }
}

Search = WrappedComponent(Form.create()(Search));
export default Search