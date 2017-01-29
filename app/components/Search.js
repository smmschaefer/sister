import React, { Component } from 'react';


class Search extends Component {
	render() {
		return (
      <div className="col-sm-12">
		<form>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search</button>
          </div>
        </form>
      </div>
		)
	}
}

      

export default Search;