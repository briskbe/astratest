const clients = [
  { id: 'nmbs', name: 'NMBS / SNCB', src: 'nmbs.svg', width: 504, height: 329 },
  { id: 'idewe', name: 'IDEWE', src: 'idewe.svg', width: 191, height: 60 },
  {
    id: 'watergroep',
    name: 'De Watergroep',
    src: 'de-watergroep.svg',
    width: 124,
    height: 118,
  },
  {
    id: 'rbfa',
    name: 'Royal Belgian Football Association — RBFA',
    src: 'rbfa.svg',
    width: 284,
    height: 115,
  },
  {
    id: 'museumpass',
    name: 'museumPASSmusées',
    src: 'museumpass.jpeg',
    width: 400,
    height: 400,
  },
];

export function ClientLogos() {
  return (
    <ul className="client-logos" aria-label="Enkele klanten van Brisk">
      {clients.map((client) => (
        <li key={client.id} className={`client-logo client-logo-${client.id}`}>
          <img
            src={`/brisk/clients/${client.src}`}
            width={client.width}
            height={client.height}
            alt={client.name}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}
