﻿using NativeTunes.Domain.UserAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NativeTunes.Application.Authentication.Common
{
    public record AuthenticationResponse(User User, string Token)
    {
    }
}
