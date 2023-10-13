import React, { useEffect, useState } from 'react';
import styles from './QrCode.css';
let QRCode = require('qrcode')

function QrCode(props) {

    const [qrCodeDataURI, setQrCodeDataURI] = useState(null); // Data URI of the QR code

    useEffect(() => {
        const opts = {
            errorCorrectionLevel: 'H',
            margin: 1,
                color: {
                    dark:"#FFFFFF",
                    light:"#3785FE"
                }
        }
        QRCode.toDataURL(props.value, opts, function (err, url) {
            if (err) throw err
            setQrCodeDataURI(url);
        })
    }, [props]);
    return (
        <div className="qr-code-container">
            <div className="qr-code-wrapper">
                <img class="qr-code-image" src={qrCodeDataURI} alt="QR Code" />
            </div>
            <div className='qr-code-content'>
                <div className="qr-code-title">{props.title}</div>
                <div className="qr-code-desc">{props.description}</div>
            </div>
        </div>
    );
}

export default QrCode;
