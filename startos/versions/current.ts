import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '31.2:2',
  releaseNotes: {
    en_US:
      'ZeroMQ notifications are now reachable only by other services on this server, no longer from your local network. The ZeroMQ Block and ZeroMQ Transaction interfaces are removed. Services that use ZeroMQ, such as LND, are unaffected. Peers that connect through your .onion address learn only that address, never your public IP address, and a misbehaving one is disconnected without affecting your other onion peers. Requires Tor 0.4.9.17:4 or later.',
    es_ES:
      'Las notificaciones ZeroMQ ahora solo son accesibles para otros servicios de este servidor, ya no desde su red local. Se eliminan las interfaces Bloque ZeroMQ y Transacción ZeroMQ. Los servicios que usan ZeroMQ, como LND, no se ven afectados. Los pares que se conectan a través de su dirección .onion solo conocen esa dirección, nunca su dirección IP pública, y uno que se comporte mal se desconecta sin afectar a sus demás pares onion. Requiere Tor 0.4.9.17:4 o posterior.',
    de_DE:
      'ZeroMQ-Benachrichtigungen sind jetzt nur noch für andere Dienste auf diesem Server erreichbar, nicht mehr aus Ihrem lokalen Netzwerk. Die Schnittstellen ZeroMQ-Block und ZeroMQ-Transaktion wurden entfernt. Dienste, die ZeroMQ nutzen, etwa LND, sind nicht betroffen. Peers, die sich über Ihre .onion-Adresse verbinden, erfahren nur diese Adresse, nie Ihre öffentliche IP-Adresse, und ein Peer, der sich fehlverhält, wird getrennt, ohne Ihre anderen Onion-Peers zu beeinträchtigen. Erfordert Tor 0.4.9.17:4 oder neuer.',
    pl_PL:
      'Powiadomienia ZeroMQ są teraz dostępne tylko dla innych usług na tym serwerze, a nie z sieci lokalnej. Usunięto interfejsy Blok ZeroMQ i Transakcja ZeroMQ. Usługi korzystające z ZeroMQ, takie jak LND, działają bez zmian. Węzły łączące się przez Twój adres .onion poznają tylko ten adres, nigdy Twojego publicznego adresu IP, a węzeł, który źle się zachowuje, zostaje rozłączony bez wpływu na pozostałe węzły onion. Wymaga Tor 0.4.9.17:4 lub nowszego.',
    fr_FR:
      "Les notifications ZeroMQ ne sont désormais accessibles qu'aux autres services de ce serveur, et non plus depuis votre réseau local. Les interfaces Bloc ZeroMQ et Transaction ZeroMQ sont supprimées. Les services qui utilisent ZeroMQ, comme LND, ne sont pas affectés. Les pairs qui se connectent via votre adresse .onion ne connaissent que cette adresse, jamais votre adresse IP publique, et un pair au comportement abusif est déconnecté sans affecter vos autres pairs onion. Nécessite Tor 0.4.9.17:4 ou une version ultérieure.",
  },
  migrations: {
    up: async () => {},
    down: async () => {},
  },
})
