import ListGroupLeft from './ListGroupLeft'
import ListGroupRight from './ListGroupRight'

function ListGroupMain(props) {
    return (
        <div className="container py-4">
            <div className="row">
                <ListGroupLeft />
                <div className="col-1"></div>
                <ListGroupRight />
            </div>
        </div>
    )
}
export default ListGroupMain;