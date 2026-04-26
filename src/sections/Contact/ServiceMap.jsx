import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./ServiceMap.module.css";

function ServiceMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    // Initialize map centered on Kelowna, BC
    map.current = L.map(mapContainer.current).setView([49.7, -119.45], 10);

    // Add OpenStreetMap tile layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map.current);

    // Service areas GeoJSON
    const serviceAreas = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: { name: "West Kelowna" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-119.65, 49.7],
                [-119.45, 49.7],
                [-119.45, 49.9],
                [-119.65, 49.9],
                [-119.65, 49.7],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: { name: "Kelowna" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-119.45, 49.65],
                [-119.2, 49.65],
                [-119.2, 49.85],
                [-119.45, 49.85],
                [-119.45, 49.65],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: { name: "Peachland" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-119.75, 49.55],
                [-119.65, 49.55],
                [-119.65, 49.65],
                [-119.75, 49.65],
                [-119.75, 49.55],
              ],
            ],
          },
        },
        {
          type: "Feature",
          properties: { name: "Lake Country" },
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [-119.35, 49.85],
                [-119.2, 49.85],
                [-119.2, 50.05],
                [-119.35, 50.05],
                [-119.35, 49.85],
              ],
            ],
          },
        },
      ],
    };

    // Add GeoJSON layer with styling
    L.geoJSON(serviceAreas, {
      style: {
        fillColor: "#2b8a3e",
        weight: 2,
        opacity: 0.8,
        color: "#1f6a2f",
        dashArray: "5, 5",
        fillOpacity: 0.3,
      },
      onEachFeature: (feature, layer) => {
        const popupContent = `<div class="${styles.popup}">
          <strong>${feature.properties.name}</strong>
          <p>Service area coverage</p>
        </div>`;
        layer.bindPopup(popupContent);

        // Highlight on hover
        layer.on("mouseover", function () {
          this.setStyle({
            fillOpacity: 0.5,
            weight: 3,
          });
        });

        layer.on("mouseout", function () {
          this.setStyle({
            fillOpacity: 0.3,
            weight: 2,
          });
        });
      },
    }).addTo(map.current);

    // Add business location marker
    const businessMarker = L.circleMarker([49.75, -119.45], {
      radius: 8,
      fillColor: "#C85A17",
      color: "#8B4513",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8,
    });

    businessMarker
      .bindPopup(
        '<div class="' +
          styles.popup +
          '"><strong>Ruta Roots Landscaping</strong><p>West Kelowna, BC</p></div>'
      )
      .addTo(map.current);

    // Fit map bounds to service areas
    const bounds = L.latLngBounds([
      [49.5, -119.8],
      [50.1, -119.1],
    ]);
    map.current.fitBounds(bounds, { padding: [50, 50] });

    return () => {
      // Cleanup on unmount
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <section className={styles.serviceMap}>
      <div className={styles.container}>
        <div className="sub-heading">Service Area Coverage</div>
        <h2 className="heading-secondary">
          We proudly serve West Kelowna and surrounding communities
        </h2>

        <div className={styles.mapWrapper}>
          <div className={styles.mapContainer} ref={mapContainer} />
          <div className={styles.mapLegend}>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ backgroundColor: "#2b8a3e" }} />
              <span>Service Areas</span>
            </div>
            <div className={styles.legendItem}>
              <span className={styles.legendColor} style={{ backgroundColor: "#C85A17" }} />
              <span>Business Location</span>
            </div>
          </div>
        </div>

        <div className={styles.mapInfo}>
          <p>
            Click on service areas to learn more. Our team serves West Kelowna, Kelowna,
            Peachland, and Lake Country with professional landscaping and lawn care services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServiceMap;
