import React from 'react';
import MovieCardComponent from "../components/movieCardComponent";

export default class SearchComponent extends React.Component {

    constructor(props){
        super(props);
        this.searchTextRef = React.createRef();
    }

    render() {

        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="card-body row no-gutters align-items-center">

                            <div className="col-auto">
                                <i className="fa fa-search h4 text-body" />
                            </div>
                            &nbsp;
                            <div className="col">
                                <input className="form-control form-control-lg form-control-borderless"
                                       type="search"
                                       placeholder="Search topics or keywords"
                                       ref = {this.searchTextRef}/>
                            </div>

                            <div className="col-auto">
                                <button className="btn btn-lg btn-success"
                                        onClick={() => this.props.searchMovie(this.searchTextRef.current.value)}>
                                    Search
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                    {
                       !this.props.showDetails &&
                           <div className="card-columns">
                               {
                                   this.props.movies.map(movie =>
                                       <MovieCardComponent
                                           className="col-2"
                                           getMovieDetails = {this.props.getMovieDetails}
                                           movie={movie}
                                           key={movie.id}/>)
                               }
                           </div>
                    }
            </div>
        )
    }
}