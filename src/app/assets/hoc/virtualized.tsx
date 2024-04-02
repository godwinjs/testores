import React from "react";

export default function VirtualizedList({ items, itemHeight, containerHeight }: any) {
    const [scrollTop, setScrollTop] = React.useState(0);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length
    );
    const visibleItems = items.slice(startIndex, endIndex);
    const invisibleItemsHeight = (startIndex + visibleItems.length - endIndex) * itemHeight;
    const handleScroll = (event: any) => {
      setScrollTop(event.target.scrollTop);
    };
    return (
      <div
        style={{ height: `${containerHeight}px`, overflowY: "scroll" }}
        onScroll={handleScroll}
      >
        <div style={{ height: `${items.length * itemHeight}px` }}>
          <div
            style={{
              position: "relative",
              height: `${visibleItems.length * itemHeight}px`,
              top: `${startIndex * itemHeight}px`,
            }}
          >
            {visibleItems.map((item: any) => (
              <div key={item.id} style={{ height: `${itemHeight}px` }}>
                {item.content}
              </div>
            ))}
          </div>
          <div style={{ height: `${invisibleItemsHeight}px` }} />
        </div>
      </div>
    );
  }