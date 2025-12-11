import { useSelector } from 'react-redux';
import { selectLoader } from '../../redux/loader/selectors';
import { Rings } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () => {
  const isLoading = useSelector(selectLoader);

  if (!isLoading) return null;

  return (
    <div className={css.loader}>
      <Rings
        visible={true}
        height="300"
        width="300"
        color="#d3d3d3"
        ariaLabel="rings-loading"
      />
    </div>
  );
};

export default Loader;
