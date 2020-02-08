import Layout from '../components/Layout'
import React, { useEffect } from 'react';

//export default function Index() {
export default class Index extends React.Component {

    constructor ( props){
        super (props);
    }

    componentDidMount (){
        let deferredPrompt;

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then(registration => {
                    console.log('service worker registration successful');
                    
                    window.addEventListener('beforeinstallprompt', function(event) {
                        // Prevent Chrome 67 and earlier from automatically showing the prompt
                        e.preventDefault();
                        // Stash the event so it can be triggered later.
                        deferredPrompt = e;
                        console.log('::::::::::::: YES :::::::::::::');
                    });
                    
                    window.addEventListener('appinstalled', function (evt) { // event handler for appinstalled event
                        console.log('[pwa] application successfully installed', evt); // log the installation to analytics or save the event somehow
                    });

                    console.log( "deferredPrompt" )
                    console.log( deferredPrompt )
                })
                .catch(err => {
                    console.warn('service worker registration failed', err.message);
                });
        }


        /*
        let deferredInstallPrompt = null;
        const pwaInstall = document.getElementById('btn-install');

        const pwaNeedsInstalling = document.getElementById('installation-label'); 
        const pwaMessage = document.getElementById('installed-label');
        pwaInstall.addEventListener('click', function (evt) { // event handler for installButton - actually does PWA installation
            console.log('[pwa] executing installation');
            deferredInstallPrompt.prompt(); // show install prompt
            pwaNeedsInstalling.setAttribute('hidden', true); // hide install button
            pwaMessage.removeAttribute('hidden'); // show install message
            deferredInstallPrompt.userChoice
            .then((choice) => {
                if (choice.outcome === 'accepted') {
                    console.log('[pwa] user accepted the A2HS prompt', choice);
                } else {
                    console.log('[pwa] user dismissed the A2HS prompt', choice);
                }
                deferredInstallPrompt = null;
            });
        });
        window.addEventListener('beforeinstallprompt', function (evt) { // event handler for beforeinstallprompt event
            e.preventDefault();
            console.log('[pwa] executing beforeinstallprompt');
            deferredInstallPrompt = evt; // saves the event
            pwaNeedsInstalling.removeAttribute('hidden'); // show install button
            pwaMessage.setAttribute('hidden', true); // hide install message
        });
        window.addEventListener('appinstalled', function (evt) { // event handler for appinstalled event
            console.log('[pwa] application successfully installed', evt); // log the installation to analytics or save the event somehow
        });
        */

    }

    render (){
    return (
        <Layout>
            <div className="row text-center">
                <div className="col mt-5">
                    <div className="card" id="installation-label">
                        <div className="card-body">
                            <p className="h3 text-center font-weight-light" >Descarga la App</p>
                            <p className="text-center text-muted font-weight-light">has click sobre el botón</p>
                            <button className="btn btn-info btn-sm btn-block p-2 pl-5 pr-5" id="btn-install" ><i className="fas fa-download"></i></button>
                        </div>
                    </div>
                    <div className="card" id="installed-label">
                        <div className="card-body">
                            <div className="h3 text-success font-weight-light" >La app ya está instalada</div>
                            <p className="text-center text-muted font-weight-light">búscala en tu escritorio</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
    }
}

// https://nextjs.org/learn/basics/api-routes/middlewares