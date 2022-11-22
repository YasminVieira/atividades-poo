import { Component } from "react";



type props = {
    tema: string;
};

export default class HistoricoCorte extends Component<props> {

    componentDidMount() {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        var elemsModal = document.querySelectorAll('.modal');
        M.Modal.init(elemsModal);
    }

    render() {
        return (
            <ul>
                <li>
                    <div id="collapsibleBody" >
                        <span>Icaro 2x</span><br />
                        <span>Yasmin 2x</span><br />
                        <hr />
                        <span>Total vendido: 4</span><br />
                    </div>
                </li>
            </ul>
        );
    }
}
