import styles from './ImageLoader.module.css';

export function ImageLoader() {
    return (
        <div>
            <h1 className={styles.header}> Search for _</h1>
            <button className={styles.button}>Select token</button>
            <img src="https://live.staticflickr.com/65535/48825675382_94fe8efdb1_m.jpg" className="App-logo" />
        </div>
    );
}