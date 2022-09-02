import { Component } from 'react';
import styles from './styles.module.css'

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
                <div className={styles.page}>
                    {pageNumber}
                </div>
            );
        }
        pages.push(
            <div className={styles.page + ' ' + styles.active}>
                {this.state.activePage}
            </div>
        );
        let lastPage = this.state.activePage + 4 > this.countPages ? this.countPages : this.state.activePage + 4;
        for(let i = this.state.activePage + 1; i <= lastPage; i++){         
            pages.push(
                <div className={styles.page}>
                    {i}
                </div>
            );
        }
        return pages;
    }
    
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.slider}>
                    <button
                        onClick={() => {      
                            // this.state.activePage = activePage > 2 ? activePage-1 : 1;
                            this.setState({activePage: this.state.activePage > 2 ? this.state.activePage - 1 : 1});
                            this.forceUpdate();
                            console.log(this.state.activePage);
                        }}
                    ></button>
                    <div className={styles.pages}>
                        {this.printButtonPages()}
                    </div>
                    <button
                        onClick={() => {   
                            this.setState({activePage: this.state.activePage < this.countPages - 1 ? this.state.activePage + 1 : this.countPages});
                            this.forceUpdate();
                            // activePage = activePage < countPages - 1 ? activePage+1 : countPages;
                            console.log(this.state.activePage);
                        }}             
                    ></button>
                </div>
            </div>
        );
    }
}

// const TableSlider = (props) => {
//     const countPages = Math.ceil(props.countCoin/20);
//     let activePage = 1;

//     function printButtonPages(countPages, activePage){
//         const pages = [];
//         for(let i = activePage - 4; i < activePage; i++){
//             let pageNumber = '';
//             if(i > 0) pageNumber = i;
//             pages.push(
//                 <div className={styles.page}>
//                     {pageNumber}
//                 </div>
//             );
//         }
//         pages.push(
//             <div className={styles.page + ' ' + styles.active}>
//                 {activePage}
//             </div>
//         );
//         let lastPage = activePage + 4 > countPages ? countPages : activePage + 4;
//         for(let i = activePage + 1; i <= lastPage; i++){         
//             pages.push(
//                 <div className={styles.page}>
//                     {i}
//                 </div>
//             );
//         }
//         return pages;
//     }

//     return(
//         <div className={styles.container}>
//             <div className={styles.slider}>
//                 <button
//                     onClick={() => {      
//                         activePage = activePage > 2 ? activePage-1 : 1;
//                         console.log(activePage);
//                     }}
//                 ></button>
//                 <div className={styles.pages}>
//                     {printButtonPages(countPages, activePage)}
//                 </div>
//                 <button
//                     onClick={() => {   
//                         activePage = activePage < countPages - 1 ? activePage+1 : countPages;
//                         console.log(activePage);
//                     }}             
//                 ></button>
//             </div>
//         </div>
//     );
// }

export default TableSlider;