import Clock from "./Clock";
import PropTypes from 'prop-types';

export default function Clocks({ clocks, onRemove }) {
    return clocks.map((e) => {
      return <Clock timer={e} key={e.id} onRemove={onRemove} />;
    });
}

Clocks.propTypes = {
    clocks: PropTypes.array, 
    onRemove: PropTypes.func,
}
  
Clocks.defaultProps = {
    clocks: [],
    onRemove: () => console.log('Тут должна быть функция кнопки удаления часов'),
}
