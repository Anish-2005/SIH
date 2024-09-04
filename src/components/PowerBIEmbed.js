import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const PowerBIEmbedComponent = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4">Cost and Time Analytics</h2>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: '<your-report-id>',
          embedUrl: '<your-embed-url>',
          accessToken: '<your-access-token>',
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                visible: false
              },
              pageNavigation: {
                visible: true
              }
            }
          }
        }}
        cssClassName={"w-full h-96"}
      />
    </div>
  );
};

export default PowerBIEmbedComponent;
