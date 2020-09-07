import React, { useEffect } from 'react';
import './Bot.css';

const Bot = () => {
  const watsonMaiara = () => {
    window.watsonAssistantChatOptions = {
    integrationID: "ac97e140-2996-495a-b34e-4eaee7f719f5", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "28977389-5769-41a6-bb8b-e0f9c6b95f9c", // The ID of your service instance.
    onLoad: function(instance) { instance.render() }
    };
  }

  useEffect(() => {
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
    watsonMaiara();
  }, [])

  return (
    <section className="container bot__align">
      <p>Precisa de ajuda para cadastrar entradas e saídas?</p>
      <h2>Clique na imagem para falar com a Maiara</h2>
    </section>
  )
}

export default Bot;