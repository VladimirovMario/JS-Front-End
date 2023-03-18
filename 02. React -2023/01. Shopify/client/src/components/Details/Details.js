import DetailsCommentsList from '../DetailsCommentsList/DetailsCommentsList';
import DetailsProduct from '../DetailsProduct/DetailsProduct';
import styles from './Details.module.css'

export default function Details () {
    return (
        <section id="details" className={`${styles["details"]} section`}>
        <h2 className="section-title">Details</h2>
        <div className="section-divider"></div>

        {/* DetailsCard component*/}
        <DetailsProduct />

        {/* <!-- details-comments --> */}
        <DetailsCommentsList />


    </section>
    );
}