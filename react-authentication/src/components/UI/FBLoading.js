import classes from './FBLoading.module.css';

const FBLoading = () => {
  return (
    <div className={classes['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default FBLoading;
