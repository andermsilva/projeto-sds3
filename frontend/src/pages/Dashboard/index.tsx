import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBAr from "components/NavBar";

const Dasboard = () => {
    return (
        <div>
            <NavBAr />
            <div className="container" >
                <h1 className="text-primary">
                    Dasboard de Vendas
                </h1>

                <div className="row px-3">
                    <div className="col-sm-6">

                        <h5 className="text-center text-secondary">Taxa de vendas (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">

                        <h5 className="text-center text-secondary">Todas as Vendas</h5>
                        <DonutChart />
                    </div>
                </div>
                <div className="py-3">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>

                <DataTable />

            </div>
            <Footer />
        </div>
    );
}
export default Dasboard;