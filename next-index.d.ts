// eslint-disable-next-line react/no-typos
import 'react';

interface PaymentSession {
  configure(configuration: Record<string, unknown>): void;
  updateSessionFromForm(paymentType: string): void;
  setFocus(role: string): void;
  setFocusStyle(roles: string[], styles: Record<string, string>): void;
  setHoverStyle(): void;
  setMessage(): void;
  setPlaceholderStyle(): void;
  setPlaceholderShownStyle(): void;
  validate(): void;
  onFocus(): void;
  onBlur(roles: string[], callbackFunction: (selector: unknown) => void): void;
  onChange(): void;
  onMouseOver(): void;
  onMouseOut(): void;
  onValidityChange(): void;
  onCardTypeChange(): void;
  onEmptinessChange(): void;
  onCardBINChange(): void;
  callback: unknown;
  aecCallbackInternal: unknown;
}

declare global {
  interface Window {
    PaymentSession: PaymentSession;
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    readOnly?: boolean;
  }
}
