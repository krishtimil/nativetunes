﻿using NativeTunes.Domain.ForumAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NativeTunes.Application.Forum.Query.GetPostList
{
    public record GetPostListQuery : IRequest<Result<IEnumerable<Post>, Error>>
    {
    }
}
