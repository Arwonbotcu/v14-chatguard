module.exports = (Discord, client, config) => {
  require('fs').readdir('./events', (err, files) => {
      if (files) {
          let loadedEvents = 0;
          console.log(`[EVENTS] ${files.length} adet event bulundu, yükleniyor...`);
          files.forEach(file => {
              loadedEvents++
              require(`${process.cwd()}/${'./events'}/${file}`)(Discord, client, config);
              if (loadedEvents == files.length) console.log(`[EVENT] Eventlar başarıyla yüklendi! (${files.length})`);
          });
      };
  });
};