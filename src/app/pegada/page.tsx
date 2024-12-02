import React from 'react';
import PegadaTemplate from '../../components/templates/pegada/pegada';
import FormularioPegada from '../../components/templates/formularios/formularioPegada';

const PegadaPage: React.FC = () => {
    return (
        <PegadaTemplate>
            <FormularioPegada />
        </PegadaTemplate>
    );
};

export default PegadaPage;
