import { Component } from 'react';
import styles from './styles.module.css'

// import leftSlide from '../../../constants/image/left.png';
// import rightSlide from '../../../constants/image/right.png';

class TableSlider extends Component{
    countPages = Math.ceil(this.props.countCoin/20);
    state = {
        activePage: 1,
    }

    printButtonPages(){
        const pages = [];
        for(let i = this.state.activePage - 4; i < this.state.activePage; i++){
            let pageNumber = '';
            if(i > 0) pageNumber = i;
            pages.push(
                <div className={styles.page}
                key={Math.random() * 999 + 1}
                    onClick={() => {
                        this.setState({activePage: pageNumber})
                        this.props.setActivePage(this.state.activePage);
                    }}
                >
                    {pageNumber}
                </div>
            );
        }
        pages.push(
            <div className ={styles.page + ' ' + styles.active}
            key={Math.random() * 999 + 1}
            >
                {this.state.activePage}
            </div>
        );
        let lastPage=this.state.activePage + 4 > this.countPages ? this.countPages : this.state.activePage + 4;
        for(let i = this.state.activePage + 1; i <= lastPage; i++){         
            pages.push(
                <div className={styles.page}
                key={Math.random() * 999 + 1}
                    onClick={() => {
                        this.setState({activePage: i})
                        this.props.setActivePage(this.state.activePage);
                    }}
                >
                    {i}
                </div>
            );
        }
        return pages;
    }
    
    render(){
        return(
            <div 
            className ={styles.container}>
                <div className={styles.slider}>
                    <div className={styles.left}
                        onClick={() => {      
                            // this.state.activePage = activePage > 2 ? activePage-1 : 1;
                            this.setState({activePage: this.state.activePage > 2 ? this.state.activePage - 1 : 1});
                            this.forceUpdate();
                            this.props.setActivePage(this.state.activePage);
                            // console.log(this.state.activePage);
                        }}
                    ></div>
                    <div className ={styles.pages}>
                        {this.printButtonPages()}
                    </div>
                    <div className={styles.right}
                        onClick={() => {   
                            this.setState({activePage: this.state.activePage < this.countPages ? this.state.activePage + 1 : this.countPages});
                            this.forceUpdate();
                            this.props.setActivePage(this.state.activePage);
                            // activePage = activePage < countPages - 1 ? activePage+1 : countPages;
                            // console.log(this.state.activePage);
                        }}             
                    ></div>
                </div>
            </div>
        );
    }
}

export default TableSlider;