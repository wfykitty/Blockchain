import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/error">Error</Link></li>
    <li><Link to="/student/Jim Smith">Student: Jim Smith</Link></li>
    <li><Link to="/student/Jim Smith/50001">Student: Jim Smith, Student No: 50001</Link></li>
    <li><Link to="/redirect">Redirect</Link></li>
    </ul>
    );
}

export default Navigation;