import React from "react";
import ReactDOM from "react-dom";
import { getById, findIndex } from './lib.js';

var data = {
	"active_id": 0,
	"list": [
		{
			"id": 1,
			"name": "Name 1",
		},
		{
			"id": 2,
			"name": "Name 2",
		},
		{
			"id": 3,
			"name": "Name 3",
		},
	],
};


function repaint()
{
	var mountNode = document.getElementById("app");
	ReactDOM.render(<App data={ data } />, mountNode);
}

class List extends React.Component
{
	render()
	{
		return <div className='list'>
		{
			this.props.data.list.map
			(
				(item, index) =>
				{
					return <div className={ 'list_item ' + ( this.props.data.active_id == item.id ? "active" : "" ) }
						onClick={ () => { this.selectItem(index) } }
						key={ index }
					>
						{ item.name }
					</div>;
				}
			)
		}
		</div>;
	}
	
	
	selectItem(index)
	{
		var item = this.props.data.list[index];
		data["active_id"] = item.id;
		repaint();
	}
	
}



class Form extends React.Component
{
	render()
	{
		var item = getById(this.props.data.list, this.props.data.active_id);
		if (item == null) return "";
		return <div className='form'>
			<div className='form_row'>
				<label>Name</label>
				<input name='name' value={ item.name }
					onChange={ (e) => { this.onChange(e) } }
				/>
			</div>
		</div>;
	}
	
	
	onChange(e)
	{
		var index = findIndex(this.props.data.list, this.props.data.active_id);
		var item = this.props.data.list[index];
		item.name = e.target.value;
		repaint();
	}
}



class App extends React.Component
{	
	render()
	{
		return <>
			<List data={ this.props.data }></List>
			<Form data={ this.props.data }></Form>
		</>;
	}
}


repaint();