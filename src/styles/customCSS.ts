import type { PropertyValue } from '@stitches/react';

export const inset = (val: PropertyValue<'inset'>) => ({
  top: val,
  bottom: val,
  left: val,
  right: val
});
export const insetX = (val: PropertyValue<'inset'>) => ({
  left: val,
  right: val
});
export const insetY = (val: PropertyValue<'inset'>) => ({
  top: val,
  bottom: val
});

export const size = (val: PropertyValue<'width' | 'height'>) => ({
  width: val,
  height: val
});
export const maxSize = (val: PropertyValue<'maxWidth' | 'maxHeight'>) => ({
  maxWidth: val,
  maxHeight: val
});
export const minSize = (val: PropertyValue<'minWidth' | 'minHeight'>) => ({
  minWidth: val,
  minHeight: val
});

export const w = (val: PropertyValue<'width'>) => ({
  width: val
});
export const h = (val: PropertyValue<'height'>) => ({
  height: val
});
export const maxW = (val: PropertyValue<'width'>) => ({
  maxWidth: val
});
export const maxH = (val: PropertyValue<'height'>) => ({
  maxHeight: val
});
export const minW = (val: PropertyValue<'width'>) => ({
  minWidth: val
});
export const minH = (val: PropertyValue<'height'>) => ({
  minHeight: val
});

export const ma = (val: PropertyValue<'margin'>) => ({
  margin: val
});
export const mt = (val: PropertyValue<'margin'>) => ({
  marginTop: val
});
export const mr = (val: PropertyValue<'margin'>) => ({
  marginRight: val
});
export const mb = (val: PropertyValue<'margin'>) => ({
  marginBottom: val
});
export const ml = (val: PropertyValue<'margin'>) => ({
  marginLeft: val
});

export const pa = (val: PropertyValue<'padding'>) => ({
  padding: val
});
export const pt = (val: PropertyValue<'padding'>) => ({
  paddingTop: val
});
export const pr = (val: PropertyValue<'padding'>) => ({
  paddingRight: val
});
export const pb = (val: PropertyValue<'padding'>) => ({
  paddingBottom: val
});
export const pl = (val: PropertyValue<'padding'>) => ({
  paddingLeft: val
});

export const pos = (val: PropertyValue<'position'>) => ({
  position: val
});

export const radii = (val: PropertyValue<'borderRadius'>) => ({
  borderRadius: val
});

export const bg = (val: PropertyValue<'background'>) => ({
  background: val
});
