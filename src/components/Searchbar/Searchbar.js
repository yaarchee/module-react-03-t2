import React, { Component } from 'react';


export default class Searchbar extends  Component{

    state = {
        targetValue: '',
    }


    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.onSubmt(this.state.targetValue)

    }

    handleChange =(e) =>{
        console.log(this)
        this.setState({targetValue: e.target.value})
    }




    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm"  onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={this.state.targetValue}
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }


}